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
        title: "Government allies rough up priests at Nicaragua church siege",
        link: "https://www.washingtonpost.com/world/the_americas/government-allies-rough-up-priests-at-nicaragua-church-siege/2018/07/09/33d97884-83b5-11e8-9e06-4db52ac42e05_story.html?noredirect=on&utm_term=.006210c63855",
        img: "https://www.washingtonpost.com/resizer/ZyClnmEGixRx3lI_2Fz02T-pgNA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SLVZC2EDYQI6RHQGJW2SVRBOAU.jpg",
        source: "Washington Post"
      },
      {
        _id: 2,
        title: "Nicaragua: State repression has reached deplorable levels",
        link: "https://www.amnesty.org/en/latest/news/2018/07/nicaragua-represion-estatal-ha-llegado-a-niveles-deplorables/",
        img: "https://www.amnesty.org/remote.axd/aineupstrmedia.blob.core.windows.net/media/18575/inti-ocon-afp-getty-images.jpg?preset=fixed_1472_42_hi",
        source: "Amnesty"
      },
      {
        _id: 3,
        title: "Nicaragua is following Venezuela’s path to despair",
        link: "https://www.washingtonpost.com/opinions/nicaragua-is-following-venezuelas-path-to-despair/2018/07/11/b2e9ba38-846b-11e8-9e80-403a221946a7_story.html?noredirect=on&utm_term=.5710ed4a4d93",
        img: "https://www.washingtonpost.com/resizer/cMyDMgionXkb_NCaTqRIr9v9zS4=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZCAMIGUFIUI6RBKTUPHISA3MPA.jpg",
        source: "Washington Post"
      },
      {
        _id: 4,
        title: "Trump administration: Nicaragua’s Daniel Ortega & family need to ‘get out of the way’",
        link: "https://www.mcclatchydc.com/news/politics-government/white-house/article214790385.html",
        img: "https://www.mcclatchy-wires.com/incoming/vb6m76/picture214523579/alternates/LANDSCAPE_1140/Nicaragua_Protests_33544.jpg",
        source: "McClatchy DC"
      },
      {
        _id: 5,
        title: "Country so dangerous tourists aren’t going there anymore",
        link: "https://www.news.com.au/travel/travel-updates/warnings/country-so-dangerous-tourists-arent-going-there-anymore/news-story/9958b9fb1df2cd82094ac384120444ea",
        img: "https://cdn.newsapi.com.au/image/v1/fac49a3567e3296f088386b3809d55d3",
        source: "News"
      },
      {
        _id: 6,
        title: "Nicaragua Protests: American journalist live tweets while trapped during bloody church siege",
        link: "https://www.newsweek.com/nicaraguan-protest-trapped-journalists-students-church-1024572",
        img: "https://ichef.bbci.co.uk/news/624/cpsprodpb/5BB2/production/_102547432_827b734f-3c79-41e9-b4b4-cb90f1f0cc1d.jpg",
        source: "News Week"
      },
      {
        _id: 7,
        title: "Nicaragua crisis: One student killed as bloody church siege ends",
        link: "https://www.bbc.com/news/world-latin-america-44834188",
        img: "https://ichef.bbci.co.uk/news/660/cpsprodpb/F804/production/_102529436_tv048139894.jpg",
        source: "BBC"
      },
      {
        _id: 8,
        title: "Deadly siege on Nicaraguan church following months of unrest",
        link: "https://www.nbcnews.com/nightly-news/video/deadly-siege-on-nicaraguan-church-following-months-of-unrest-1277137987607",
        img: "https://ichef.bbci.co.uk/news/624/cpsprodpb/243A/production/_102547290_cca16170-3cba-4be3-af88-b936ba8600e2.jpg",
        source: "NBC News"
      },
      {
        _id: 9,
        title: "Violent Nicaragua protests claim another 10 lives: rights group",
        link: "https://www.reuters.com/article/us-nicaragua-protests/violent-nicaragua-protests-claim-another-10-lives-rights-group-idUSKBN1K515N",
        img: "https://s3.reutersmedia.net/resources/r/?m=02&d=20180716&t=2&i=1283573129&r=LYNXMPEE6F00M&w=2560",
        source: "Reuters"
      },
      {
        _id: 10,
        title: "Nicaragua security forces launch deadly raids",
        link: "https://www.bbc.co.uk/news/world-latin-america-44842843",
        img: "https://ichef.bbci.co.uk/news/624/cpsprodpb/6E72/production/_102547282_721258f5-5368-4920-9ff9-f5400dd2e1ce.jpg",
        source: "BBC"
      },
      {
        _id: 11,
        title: "Ortega is becoming the type of autocrat he once despised",
        link: "https://www.washingtonpost.com/opinions/nicaragua-is-rapidly-heading-for-a-new-nightmare/2018/07/16/049dabd4-890b-11e8-a345-a1bf7847b375_story.html?utm_term=.f43ce9aa1250",
        img: "https://www.washingtonpost.com/resizer/duCVbSVtFU40vLX7MKVZvbtppbw=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SXAR3OUJHII6RBNOKEN4CFDLBM.jpg",
        source: "Washinton Post"
      },
      {
        _id: 12,
        title: "Nicaragua unrest: Bishop's anger as people die in clashes",
        link: "https://www.bbc.com/news/world-latin-america-44773068",
        img: "https://ichef.bbci.co.uk/news/660/cpsprodpb/185B/production/_102453260_da37b4c8-80b2-4714-9616-1e6c8751520f.jpg",
        source: "BBC"
      },
      {
        _id: 13,
        title: "U.S. Imposes Sanctions on 3 Top Nicaraguan Officials After Violent Crackdown",
        link: "https://www.nytimes.com/2018/07/05/us/politics/us-nicaragua-sanctions.html",
        img: "https://static01.nyt.com/images/2018/07/06/us/politics/06dc-sanctions1/merlin_140557677_9899034e-878a-49f1-bfca-bf417d1d28a2-superJumbo.jpg?quality=90&auto=webp",
        source: "New York Times"
      },
      {
        _id: 14,
        title: "309 Nicaraguans killed in 75 days of anti-government protest",
        link: "https://www.newsweek.com/309-nicaraguans-killed-75-days-anti-government-protests-1007469",
        img: "https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2018/07/03/gettyimages-988303536.jpg",
        source: "News Week"
      },
      {
        _id: 15,
        title: "U.S. slaps economic sanctions on three top Nicaraguan officials",
        link: "http://www.latimes.com/nation/la-na-pol-us-nicaragua-20180705-story.html",
        img: "http://www.latimes.com/resizer/9heS4Rm8t2CuhAFih8nMlkESgBk=/1400x0/www.trbimg.com/img-5b3e9a02/turbine/la-1530829310-wblntxrau1-snap-image",
        source: "LA Times"
      },
      {
        _id: 16,
        title: "Nicaragua president attacks 'coup-mongers' in speech",
        link: "https://www.theguardian.com/world/2018/jul/08/nicaragua-president-daniel-ortega-attacks-coup-mongers-in-speech",
        img: "https://i.guim.co.uk/img/media/7ea890f7a3e0367c06e52d8e047dd8db262d1a5e/19_356_3169_1902/master/3169.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=89875c85858c0899ba2c2d24433d7dab",
        source: "Guardian"
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
            <div className="left">
              {/* Map each of our posts */
                this.state.blogs.map(post => (

                  <div key={post._id} className="card col-lg-4 col-md-4 col-sm-6 col-12">
                    <a href={post.link} target="_blank">
                      <div className="img-container">
                        <img
                          alt={post.title}
                          src={post.img}
                        />
                      </div>
                      <span className="content">

                        {post.title}
                        <br />

                        <div className="source">
                          Source: {post.source}
                        </div>

                      </span>
                    </a>
                  </div>

                ))}
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
