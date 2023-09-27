import React, { Component } from "react";

import { Link } from "react-router-dom";
import TopTutors from "./topTutors";
import AboutUs from "./aboutUs";

const image = require("./images/tutoringf.png");
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid  text-center  ">
        <div className="row bg-secondary-subtle mb-5 p-4">
          <div className="col-2"></div>
          <div className="col-4  my-auto">
            <h3 className="text-start fw-bolder m-5 ff-m">
              In the digital realm of limitless possibilities, we empower minds
              and transform futures through the finest online education, where
              knowledge knows no boundaries, and excellence becomes your
              everyday journey.
            </h3>
          </div>
          <div className="col-4">
            <img
              src={image}
              className="img-fluid rounded-image"
              alt="home_image"
            />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <TopTutors />
        </div>
        <div className="m-auto text-center">
          <h5>
            Want to learn more and know more about courses and professor ?
          </h5>
          <Link to="/tutors">
            <button className="btn btn-primary bth-sm ms-3">Click Here</button>
          </Link>
        </div>
        {/* <div className="row mx-5">
          <div className="row">
            <h3> Our Mission</h3>
          </div>
          <div className="row mx-6 text-center">
            <div className="w-75 m-auto text-center">
              <span>
                Welcome to our premier online tutoring platform, where learning
                knows no boundaries. We are dedicated to helping students of all
                ages and levels achieve academic excellence from the comfort of
                their own homes. Our team of experienced and passionate
                educators is here to guide you through your educational journey,
                providing personalized support and tailored lessons that cater
                to your unique needs. Why choose us? Our tutors are not only
                experts in their fields but also skilled mentors who foster a
                positive and engaging learning environment. With one-on-one
                sessions, interactive resources, and a commitment to your
                success, we're your partners in reaching your educational goals.
                Join the countless students who have already benefited from our
                online tutoring services. Together, we'll turn your learning
                aspirations into reality. Explore our diverse range of subjects,
                and let's embark on this learning journey together. Your future
                starts here!
                <br></br>
              </span>
            </div>
          </div>
        </div> */}
        <AboutUs />
      </div>
    );
  }
}

export default Home;
