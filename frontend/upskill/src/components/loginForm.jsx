import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { login } from "../services/authService";
// import { browserHistory } from 'react-router';
import { Navigate, redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    loggedIn: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const res = await login(data.username, data.password);
      document.cookie = `token=` + res.data;
      let loggedIn = true;
      this.setState({ loggedIn });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.loggedIn && <Navigate to="/" replace={true} />}
        <h1 className="text-center">Login Form</h1>
        <form
          onSubmit={this.handleSubmit}
          className="d-flex flex-column align-items-center"
        >
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
