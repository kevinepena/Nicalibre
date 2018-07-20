import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

class CreatePost extends Component {
  state = {
    selectedFile: null,
    fileName:"",
    title: "",
    body: "",
    image: " https://images.all-free-download.com/images/graphicthumb/beautiful_scenic_03_hd_picture_166318.jpg"
  };

  refreshBlogs() {
    console.log("this should go!");
 
  }

  reload(){
     setTimeout(() => {
    window.location.reload();
   }, 1000);
  }

  componentDidMount() {
    this.refreshBlogs();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  postBlog = event => {
    event.preventDefault();
    const { title, body } = this.state;
    console.log({ title, body });
  //   \

  // image upload

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
       console.log(this.state.selectedFile);
  };


  render() {
    return (
      <div>
          <form>
          <h1>
            <em>Update name of form here:</em>
          </h1>
         
          <h5>Insert an Image for your blog</h5>
          <div>
          <input className="btn-choose" type="file" name="fileName"  
          value ={this.title} 
          onChange={this.props.fileChangedHandler} />
          </div>
          <br/>
          {/* <div>
            <button className="btn-upload" onClick={this.uploadHandler}>Upload!</button>
          </div> */}

          <br/>

          <div>
          <h5>Create your post:</h5>
            <input
              name="title"
              onChange={this.handleInputChange}
              value={this.title}
              placeholder={`Add Title to your Post`}
            />
          </div>
          <br/>
          <div>
          <h5>Add post content below:</h5>
            <textarea
              name="body"
              onChange={this.handleInputChange}
              value={this.body}
              placeholder={`Add content to your post!`}
            />
          </div>
          <div>
            <button onClick={this.postBlog && this.uploadHandler}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;

