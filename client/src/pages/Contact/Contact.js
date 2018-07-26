import React, { Component } from "react";

import Iframe from "react-iframe";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="container-contact">

      <div className="fundme">
      <h1>Add Encouraging Donation Content Here</h1>
      <p> Help reach our goal to help Nicaragua! All proceeds..... </p>
        <Iframe
          url="https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=apoyar-a-nicaragua&image=0&coinfo=0&preview=1"
          // width="450px"
          // height="165px"
          height="20vh"
          width="90vw"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
        </div>

        <div className="form-text">
          <h1 className="reachout">Want to reach out? </h1>
          <p>Please submit your and your feedback!</p>
        </div>

        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="contactFirstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="contactFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="contactLastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="contacctLastName"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPhone">Phone Number</label>
              <input
                className="form-control"
                type="tel"
                id="contactPhone"
                placeholder="(555)-555-5555"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Message">Message:</label>
            <textarea
              className="form-control"
              rows="5"
              id="contactMessage"
              placeholder="Don't be shy, drop us a few lines! We'd love to hear from you!"
            />
          </div>

          <button type="submit" className="btn submit-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    );
  }
}
export default Contact;
