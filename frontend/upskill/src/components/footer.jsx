import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center bottom-0 w-100 mt-5">
        <div className="container p-1">
          <section className="mb-1">
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fa fa-google"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fa fa-linkedin"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fa fa-github"></i>
            </a>
          </section>

          <section>
            <span>
              We provide the best teaching assistants to students online.
            </span>
          </section>

          <div
            className="text-center p-1"
            //   style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © UPSKILL All Rights reserved
            {/* <a className="text-white" href="#">
                UPSKILL.com
              </a> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
