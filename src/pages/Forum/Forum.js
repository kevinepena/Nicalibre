import React, { Component } from "react";
import firebase from "../../firebase";

import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardImg

} from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/Forum/Forum.css";


class Forum extends Component {
  constructor() {
    super();
    this.state = {
      blogContent: "",
      title: "",
      allBlogs: [],
     created: "",
      imageUrl: "",
    
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
      created:  firebase.database.ServerValue.TIMESTAMP,
      imageUrl: this.state.imageUrl,

    };
   
    allBlogsRef.push(blog);
    this.setState({
      title: "",
      blogContent: "",
      created:"",
      imageUrl: ""
    
    });
  }

  componentDidMount() {
    const allBlogsRef = firebase
      .database()
      .ref("allBlogs")
      .orderByChild("published");

    // .limitToLast(5);
    allBlogsRef.on("value", snapshot => {
      let allBlogs = snapshot.val();

      let newState = [];
      for (let blog in allBlogs) {
        newState.push({
          id: blog,
          title: allBlogs[blog].title,
          blogContent: allBlogs[blog].blogContent,
          created: allBlogs[blog].created,
          imageUrl: allBlogs[blog].imageUrl
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

                  <label htmlFor="post-blogContent">Add Blog Content:</label>
                  <br />
                  <input
                    type="text"
                    name="blogContent"
                    placeholder="What are we sharing?"
                    onChange={this.handleChange}
                    value={this.state.blogContent}
                  />

                  <label htmlFor="post-blogImage">Add Image URL:</label>
                  <br />
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Insert image URL with http://..."
                    value={this.state.imageUrl}
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

        <div className="wrapper container ">
        {/* <CardDeck> */}
          {this.state.allBlogs
            .slice(0)
            .reverse()
            .map(post => {
              return (
           
                <Card key={post.id}>
                  <CardHeader>{post.title}</CardHeader>
                  <CardImg top width="100%" src="{post.imageUrl} alt={post.title} "/>
        
                  <CardBody>

                    <CardText>{post.blogContent}</CardText>
                    {loggedIn ? (
                      <Button onClick={() => this.removeItem(post.id)}>
                        Remove Post
                      </Button>
                    ) : (
                      ""
                    )}
                  </CardBody>
                  <CardFooter>Footer</CardFooter>
                </Card>
             
              );
            })}
            {/* </CardDeck> */}
        </div>
      </div>
    );
  }
}

export default Forum;
