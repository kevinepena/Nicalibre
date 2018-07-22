import React, { Component } from "react";
import firebase from "../../firebase";

import "../../pages/Forum/Forum.css";
// import CreatePost from "./pages/CreatePost";

class Forum extends Component {
  constructor() {
    super();
    this.state = {
      blogContent: "",
      title: "",
      allBlogs: [],
      selectedFile: "",
      fileName: "",
      downloadURL: ""
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
      downloadURL: ""
    };
    allBlogsRef.push(blog);
    this.setState({
      blogContent: "",
      title: "",
      selectedFile: "",
      fileName: "",
      downloadURL: ""
    });
  }

  componentDidMount() {
    const allBlogsRef = firebase.database().ref("allBlogs");
    allBlogsRef.on("value", snapshot => {
      let allBlogs = snapshot.val();
      let newState = [];
      for (let blog in allBlogs) {
        newState.push({
          id: blog,
          title: allBlogs[blog].title,
          blogContent: allBlogs[blog].blogContent,
          selectedFile: allBlogs[blog].selectedFile,
          fileName: allBlogs[blog].fileName
        });
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

    return (
      <div className="app">
        <div className="wrapper-forum">
          <h1>Testing Blog Posts</h1>

          <div className="container-forum">
            {loggedIn ? (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="post-title">Add Title</label>
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Attention-Grabber"
                      onChange={this.handleChange}
                      value={this.state.title}
                    />
                    <br />
                  </div>

                  <label htmlFor="post-title">Add Blog Content:</label>
                  <br />
                  <input
                    type="text"
                    name="blogContent"
                    placeholder="What are we sharing?"
                    onChange={this.handleChange}
                    value={this.state.blogContent}
                  />

                  <label htmlFor="post-title">Add Image:</label>
                  <br />
                  <input
                    className="btn-choose"
                    type="file"
                    name="fileName"
                    value={this.state.fileName}
                    onChange={this.handleChange}
                  />

                  <br />
                  <br />
                  <button>Add Item</button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="wrapper">
          <ul>
            {this.state.allBlogs.map(post => {
              return (
                <li key={post.id}>
                  <p>{post.fileName}</p>
                  <img src={post.fileName} alt="blog" />
                  <h3>{post.title}</h3>
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
      </div>
    );
  }
}

export default Forum;
