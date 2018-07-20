import React, { Component } from "react";
// import API from "../../utils/API";
import CreatePost from "../CreatePost";
import Wrapper from "../../components/Wrapper";
import "../../pages/Home/Home.css";
// import { base } from "../../base";
// import  * as firebase from "firebase";

class Home extends Component {
  state = {
    blogs: [
      {
        _id: 1,
        title: "Blog Update 1 TEst",
        body: "Or is it????"
      },
      {
        _id: 2,
        title: "Another example of a Trending/Update Blog",
        body: "Or is it????"
      }
    ]
  };

  refreshBlogs() {
    console.log("this should go!");
    // API.getArticle().then(res => {
    //   console.log(res.data);
    //   this.setState({ blogs: res.data });
    // });
  }

  // updateblog(blog){
  //   const blogs = {...this.state.blogs};
  //   blogs[blog.id] = blog;
  //   this.setState({blogs});
  // }

  componentDidMount() {
    this.refreshBlogs();
    // this.blogRef = base.syncState('blogs', {
    //   context: this,
    //   state: 'blogs'
    // });
  }

  checkPage() {
    const homeLocation = "/";
    const location = this.props.location.pathname;

    if (location !== homeLocation) {
      console.log(`This is your Route location: ${location}`);
    } else {
      console.log("this is the home route");
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  messagePost = event => {
    event.preventDefault();
    const { title, body } = this.state;
    console.log({ title, body });
    // API.postArticle({ title, body })
    //   .then(res => {
    //     console.log(res);
    //     this.setState({ title: "", body: "" });
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    const loggedIn = this.props.auth.isAuthenticated();
    // const canWrite = this.props.auth.userHasScopes(["write:blog","roles: admin"]);

    return (
      <div className="container">
        {/* <div> Check console to show current location of page</div>
      
        {!loggedIn ? (
          <button onClick={this.props.auth.login}>Log In</button>
        ) : (
          <button onClick={this.props.auth.logout}>Log Off</button>
        )} */}

        {/* <Link to="/">
          <button>Home&nbsp; </button>
        </Link>

        {loggedIn && canWrite ? (
          <Link to="/createpost">
            <button>Create a Post&nbsp; </button>
          </Link>
        ) : (
          ""
        )}
        {loggedIn ? <Link to="/profile">Profile&nbsp;</Link> : ""}  */}

        <h1> Updates / Trending Now </h1>

        <div className="card-container">
          <Wrapper>
            {/* Map each of our posts */
            this.state.blogs.map(post => (
              <div key={post._id} className="collection ">
                <div className="card col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="img-container">
                    <img
                      alt={post.title}
                      src="https://images.all-free-download.com/images/graphicthumb/beautiful_scenic_03_hd_picture_166318.jpg "
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li className="content li">
                        <strong>Post Title:</strong> {post.title}
                      </li>
                      <li className="content li">
                        <strong>Posted:</strong> {post.createdAt}
                      </li>
                      <li className="content li">
                        <strong>Content:</strong> {post.body}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Wrapper>
        </div>

        <div className="createpost">
          {/* if logged in and canWrite, then display CreatePost, otherwise display nothing else */}
          {loggedIn ? <CreatePost /> : ""}
        </div>
      </div>
    );
  }
}

export default Home;
