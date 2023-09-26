import React, { Component } from "react";

class AboutUs extends Component {
  state = { imgUrl: require("./images/coding.jpg") };
  render() {
    return (
      <div className="about-us-container">
        <div className="image-container">
          <img
            className="card-img-top"
            src={this.state.imgUrl}
            alt="Tutor1"
            style={{ width: "600px", height: "auto" }}
          />
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <hr />
          <p>
            Connect with an online tutor in less than 30 seconds, 24/7. It does
            not matter if you want help with a single problem or you need a
            3-hour lesson. Highly qualified tutors from the best universities
            across the globe ready to help. An acceptance rate of 4% means all
            our tutors are thoroughly screened. Our lesson space features a
            virtual whiteboard, text editor, audio/video chat, screensharing and
            so much more. All lessons are archived for your convenience.Connect
            with an online tutor in less than 30 seconds, 24/7. It does not
            matter if you want help with a single problem or you need a 3-hour
            lesson. Highly qualified tutors from the best universities across
            the globe ready to help. An acceptance rate of 4% means all our
            tutors are thoroughly screened. Our lesson space features a virtual
            whiteboard, text editor, audio/video chat, screensharing and so much
            more. All lessons are archived for your convenience.Connect with an
            online tutor in less than 30 seconds, 24/7. It does not matter if
            you want help with a single problem or you need a 3-hour lesson.
            Highly qualified tutors from the best universities across the globe
            ready to help. An acceptance rate of 4% means all our tutors are
            thoroughly screened. Our lesson space features a virtual whiteboard,
            text editor, audio/video chat, screensharing and so much more. All
            lessons are archived for your convenience.Connect with an online
            tutor in less than 30 seconds, 24/7. It does not matter if you want
            help with a single problem or you need a 3-hour lesson. Highly
            qualified tutors from the best universities across the globe ready
            to help. An acceptance rate of 4% means all our tutors are
            thoroughly screened. Our lesson space features a virtual whiteboard,
            text editor, audio/video chat, screensharing and so much more. All
            lessons are archived for your convenience. Our lesson space features
            a virtual whiteboard, text editor, audio/video chat, screensharing
            and so much more. All lessons are archived for your convenience. Our
            lesson space features a virtual whiteboard, text editor, audio/video
            chat, screensharing and so much more. All lessons are archived for
            your convenience. Our lesson space features a virtual whiteboard,
            text editor, audio/video chat, screensharing and so much more. All
            lessons are archived for your convenience. Our lesson space features
            a virtual whiteboard, text editor, audio/video chat, screensharing
            and so much more. All lessons are archived for your convenience.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
