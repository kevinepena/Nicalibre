import React, { Component } from "react";
import firebase from "../../firebase";

class CreatePost extends Component {
  // state = {
  //   selectedFile: null,
  //   fileName: "",
  //   title: "",
  //   body: "",
  //   image:
  //     " https://images.all-free-download.com/images/graphicthumb/beautiful_scenic_03_hd_picture_166318.jpg"
  // };

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
      downloadURL:""

        };
    allBlogsRef.push(blog);
    this.setState({
      blogContent: "",
      title: "",
      selectedFile: "",
      fileName:"",
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


  // refreshBlogs() {
  //   console.log("this should go!");

  // };

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  // componentDidMount() {
  //   this.refreshBlogs();
  // }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   console.log(name);
  //   this.setState({ [name]: value });
  // };

  // postBlog = event => {
  //   event.preventDefault();
  //   const { title, body } = this.state;
  //   console.log({ title, body });
  // };

  // // image upload

  // fileChangedHandler = event => {
  //   this.setState({ selectedFile: event.target.files[0] });
  // };

  // uploadHandler = () => {
  //   console.log(this.state.selectedFile);
  // };

  render() {
    return (
      <div className="conatiner-create">
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
    );
  }

  //     <div>
  //         <form>
  //         <h1>
  //           <em>Update name of form here:</em>
  //         </h1>

  //         <h5>Insert an Image for your blog</h5>
  //         <div>
  //         <input className="btn-choose" type="file" name="fileName"
  //         value ={this.state.fileName}
  //         onChange={this.handleChange} />
  //         </div>
  //         <br/>
  //         {/* <div>
  //           <button className="btn-upload" onClick={this.uploadHandler}>Upload!</button>
  //         </div> */}

  //         <br/>

  //         <div>
  //         <h5>Create your post:</h5>
  //           <input
  //             name="title"
  //             onChange={this.handleInputChange}
  //             value={this.title}
  //             placeholder={`Add Title to your Post`}
  //           />
  //         </div>
  //         <br/>
  //         <div>
  //         <h5>Add post content below:</h5>
  //           <textarea
  //             name="body"
  //             onChange={this.handleInputChange}
  //             value={this.body}
  //             placeholder={`Add content to your post!`}
  //           />
  //         </div>
  //         <div>
  //           <button onClick={this.postBlog && this.uploadHandler}>Submit</button>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
}

export default CreatePost;
