import React, { Component } from "react";
import "../Form/Form.css";
import CreatePost from "../CreatePost";


class Forum extends Component {
  constructor() {
    super();
    this.state = {
      blogContent: "",
      title: "",
      allBlogs: [],
      selectedFile: "",
      fileName: "",
      downloadURL: "",
      created: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const allBlogsRef = firebase.database().ref("allBlogs");
  
    // const storageRef = firebase.storage().ref("blogPictures");

    const blog = {
      title: this.state.title,
      blogContent: this.state.blogContent,
      selectedFile: this.state.selectedFile,
      fileName: this.state.fileName,
      // downloadURL: "",
      created: ""
    };
    allBlogsRef.push(blog);
    this.setState({
      blogContent: "",
      title: "",
      selectedFile: "",
      fileName: "",
      downloadURL: "",
      created: Date.now()
    });
  }

  componentDidMount() {

    const allBlogsRef = firebase
      .database()
      .ref("allBlogs")
      .orderByChild("published")
      // .limitToLast(5);
    allBlogsRef.on("value", snapshot => {
      let allBlogs = snapshot.val();
    
      let newState = [];
      for (let blog in allBlogs) {
        newState.push({
          id: blog,
          title: allBlogs[blog].title,
          blogContent: allBlogs[blog].blogContent,
          selectedFile: allBlogs[blog].selectedFile,
          fileName: allBlogs[blog].fileName,
          created: allBlogs[blog].created
        });
        console.log(allBlogs[blog].created)
      }
      this.setState({
        allBlogs: newState
      });
    });

  }

  removeItem(blogId) {
    const blogRef = firebase.database().ref(`/allBlogs/${blogId}`);
    blogRef.remove();
  }

  render() {
    const loggedIn = this.props.auth.isAuthenticated();
    // const canWrite = this.props.auth.userHasScopes(["write:blog","roles: admin"]);

    return (
      <div className="container">
        <h1> Updates / Trending Now </h1>

        <div className="wrapper">
          <ul>
            {this.state.allBlogs
              .slice(0)
              .reverse()
              .map(post => {
                return (
                  <li key={post.id}>
                    <p>{post.fileName}</p>
                    <img src={post.fileName} alt="blog" />
                    <h3>{post.title}</h3>
                    <h4>Posted: {post.created}</h4>
                    <p>
                      Blog Content: {post.blogContent}
                      <br />
                      <br />
                      {loggedIn ? (
                        <button onClick={() => this.removeItem(post.id)}>
                          Remove Post
                        </button>
                      ) : (
                        ""
                      )}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="createpost">
          {/* if logged in and canWrite, then display CreatePost, otherwise display nothing else */}
          {loggedIn ? <CreatePost /> : ""}
        </div>
      </div>
    );
  }
}
export default Forum;
