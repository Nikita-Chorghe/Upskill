import React, { Component } from "react";

class AboutUs extends Component {
  state = { imgUrl: require("./images/coding.jpg") };
  render() {
    return (
      <div className="container container-with-padding ">
        <div className="about-us-container bg-secondary-subtle">
          <div className="image-container ">
            <img
              className="rounded-image-about"
              src={this.state.imgUrl}
              alt="Tutor1"
              style={{ width: "600px", height: "auto" }}
            />
          </div>
          <div className="text-container">
            <h2>About Us</h2>
            <hr />
            <p>
              Connect with an online tutor in less than 30 seconds, 24/7. It
              does not matter if you want help with a single problem or you need
              a 3-hour lesson. Highly qualified tutors from the best
              universities across the globe ready to help. An acceptance rate of
              4% means all our tutors are thoroughly screened. Our lesson space
              features a virtual whiteboard, text editor, audio/video chat,
              screensharing and so much more. All lessons are archived for your
              convenience.Our tutors are not only experts in their fields but
              also skilled mentors who foster a positive and engaging learning
              environment. With one-on-one sessions, interactive resources, and
              a commitment to your success, we're your partners in reaching your
              educational goals. Join the countless students who have already
              benefited from our online tutoring services. Together, we'll turn
              your learning aspirations into reality.
            </p>
          </div>
        </div>

        <div className="row mx-5 text-center h1-about container-fluid">
          <h2>Improving lives through learning</h2>
          <p>
            Whether you want to learn or to share what you know, you’ve come to
            the right place. As a global destination for online learning, we
            empower organizations and individuals with flexible and effective
            skill development.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
