import React, { Component } from "react";
import "../Form/Form.css";
import API from "../../utils/API";
// import CreatePost from "../../pages/CreatePost" 

class Form extends Component {
  state = {
    selectedFile: null,
    title: "",
    body: "",
    image: ""
   };

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    API.post('my-domain.com/file-upload', this.state.selectedFile)
    console.log(this.state.selectedFile);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  reload(){
    setTimeout(() => {
   window.location.reload();
  }, 1000);
 }

  postBlog = event => {
    event.preventDefault();
    const { title, body } = this.state;
    console.log({ title, body });
    API.postArticle({ title, body })
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "", image: "" });
      }).then(
       this.reload()
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="form-container">
        <form>
          <h1>
            <em>Update name of form here:</em>
          </h1>

         
          <h5>Insert an Image for your blog</h5>
          <div>
          <input className="btn-choose" type="file" onChange={this.fileChangedHandler} />
          </div>
          <br/>
          <div>
            <button className="btn-upload" onClick={this.uploadHandler}>Upload!</button>
          </div>

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
            <button onClick={this.postBlog}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
