import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class UserForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = async () => {
    await userService.register(this.state.data);
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Register</h1>
        <form
          onSubmit={this.handleSubmit}
          className="d-flex flex-column align-items-center"
        >
          {this.renderInput("username", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default UserForm;
