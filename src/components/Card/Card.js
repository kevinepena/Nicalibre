import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.title} src={props.image} />
    </div>
    <div className="content">
      <ul>
      
        <li>
        <strong>Post Title:</strong> {props.title}</li>
        <li>
          <strong>Posted:</strong> {props.createdAt}
        </li>
        <li>
        <strong>Content:</strong> {props.body}</li>
      </ul>
    </div>
  </div>
);

export default Card;
