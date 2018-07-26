import React, { Component } from "react";
import API from "../../utils/API";
// import { withRouter } from "react-router-dom";

class CreatePost extends Component {


  state = {
    header: "",
    src: "",
    link: "",
    caption: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  postBlog = event => {
    event.preventDefault();
    const { header, src, link, caption } = this.state;
    API.saveArticle({ header, src, link, caption });
    this.setState({
      header: "",
      src: "",
      link: "",
      caption: ""
    })
  };

  render() {
    return (
      <div>
        <form>
          <h1>
            <em>Update carousel articles:</em>
          </h1>
          <br />
          <div>
            <h5>Create your post:</h5>
            <input
              name="header"
              onChange={this.handleInputChange}
              value={this.header}
              placeholder={`Title`}
            />
            <input
              name="link"
              onChange={this.handleInputChange}
              value={this.link}
              placeholder={`Link`}
            />
            <input
              name="src"
              onChange={this.handleInputChange}
              value={this.src}
              placeholder={`Image link`}
            />
            <input
              name="caption"
              onChange={this.handleInputChange}
              value={this.caption}
              placeholder={`Source`}
            />
          </div>
          <div>
            <button className="btn" onClick={this.postBlog}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;

