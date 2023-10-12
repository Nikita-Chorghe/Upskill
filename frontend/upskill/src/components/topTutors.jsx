import React, { Component } from "react";

class TopTutors extends Component {
  state = {
    imgUrl1: require("./images/tutor1.jpg"),
    imgUrl2: require("./images/tutor2.jpg"),
    imgUrl3: require("./images/tutor3.jpg"),
  };
  render() {
    return (
      <div>
        <h3>Top Tutors</h3>

        <div className="card-group m-5">
          <div className="card">
            <img
              className="rounded-images m-4 "
              src={this.state.imgUrl1}
              alt="Tutor1"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Maria Garcia</h5>
              <p className="card-text">
                Maria is a science enthusiast and a fantastic tutor for physics
                and chemistry. She holds a Ph.D. in chemistry and has a knack
                for simplifying complex scientific concepts. Students love her
                hands-on experiments and engaging teaching style.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              className="rounded-images m-4"
              src={this.state.imgUrl2}
              alt="Tutor1"
            ></img>
            <div className="card-body">
              <h5 className="card-title">David Smith</h5>
              <p className="card-text">
                David SmithDavid is a dedicated English language tutor. He holds
                a degree in English literature and has helped numerous students
                improve their writing and speaking skills. David's approach is
                interactive and engaging, making learning English fun.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div className="card">
            <img
              className="rounded-images m-4"
              src={this.state.imgUrl3}
              alt="Tutor1"
            ></img>
            <div className="card-body">
              <h5 className="card-title">John Johnson</h5>
              <p className="card-text">
                John is a highly experienced tutor with a passion for
                mathematics. He has a master's degree in mathematics and has
                been teaching for over 10 years. His teaching style is patient
                and tailored to each student's needs.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopTutors;
