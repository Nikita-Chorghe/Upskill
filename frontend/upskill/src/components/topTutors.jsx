import React, { Component } from "react";

class TopTutors extends Component {
  state = { imgUrl: require("./images/coding.jpg") };
  render() {
    return (
      <div>
        <h3>Top Tutors</h3>
        <hr />
        <div className="card-group">
          <div className="card"></div>
          <img
            className="card-img-top"
            src={this.state.imgUrl}
            alt="Tutor1"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    );
  }
}

export default TopTutors;
