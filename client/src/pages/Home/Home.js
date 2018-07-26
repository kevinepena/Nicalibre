import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import "../../pages/Home/Home.css";
import axios from "axios";

class Home extends Component {


  state = {
    tweets: []
  };

  refreshBlogs() {
    console.log("this should go!");
    // API.getArticle().then(res => {
    //   console.log(res.data);
    //   this.setState({ blogs: res.data });
    // });
  }

  getTweets() {
    axios.get("/api/tweets")
    .then(res => {
      console.log(res.data)
      for(let i = 0; i < 10; i++) {
        this.state.tweets.push(res.data[i])
      }
      console.log(this.state)
    }
    )
    .catch(err => console.log(err));
  }

  // updateblog(blog){
  //   const blogs = {...this.state.blogs};
  //   blogs[blog.id] = blog;
  //   this.setState({blogs});
  // }

  componentDidMount() {
    this.getTweets();
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
    // const loggedIn = this.props.auth.isAuthenticated();
    // const canWrite = this.props.auth.userHasScopes(["write:blog","roles: admin"]);

    return (
      <div className="container-home">
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

        <h1 className="home-h1"> Updates / Trending Now </h1>

        <div className="card-container">
          <Wrapper>
            <div className="left">
            </div>
            <div className="right">
            <section id="react-app">
            {/* {{ markup }} */}
            </section>
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default Home;
//               {/* Map each of our posts */
// this.state.blogs.map(post => (

//   <div key={post._id} className="card col-lg-4 col-md-4 col-sm-6 col-12">
//     <a href={post.link} target="_blank">
//       <div className="img-container">
//         <img
//           alt={post.title}
//           src={post.img}
//         />
//       </div>
//       <span className="content">

//         {post.title}
//         <br />

//         <div className="source">
//           Source: {post.source}
//         </div>

//       </span>
//     </a>
//   </div>

// ))}
// </div>