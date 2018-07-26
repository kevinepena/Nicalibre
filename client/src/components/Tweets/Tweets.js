import React, { Component } from "react";
import Tweet from "../Tweet";
import "./Tweets.css";
class Tweets extends Component {

    render() {
        // Build list items of single tweet components using map
        var content = this.props.tweets.map( tweet  => {
            return (
                <Tweet key={tweet._id} tweet={tweet} />
            )
        });
        return (
            <ul className="tweets">{content}</ul>
        )
    }


};

export default Tweets;