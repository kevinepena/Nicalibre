import React, { Component } from "react";
import Tweet from "../Tweet";
import "./Tweets.css";
class Tweets extends Component {

    constructor(props) {
        super(props);

        this.state = { tweets: this.props.tweets };

    }

    getTweets() {
        // var tweets = this.props.tweets;
        // Build list items of single tweet components using map


    }

    render() {



        return (
            <ul className="tweets">{
                this.props.tweets.splice(0, 100).map(tweet => {
                    console.log(tweet);
                    <li className={"tweet" + (tweet.active ? ' active' : '')}>
                        <img src={tweet.avatar} className="avatar" />
                        <blockquote>
                            <cite>
                                <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
                                <span className="screen-name">@{tweet.screenname}</span>
                            </cite>
                            <span className="content">{tweet.body}</span>
                        </blockquote>
                    </li>
                })
            }</ul>
        )

    }


};

export default Tweets;