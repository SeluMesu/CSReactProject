import React, { Component } from "react";
import axios from "axios";

// my components
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import './components/css/style.css';

class App extends Component {
  state = {
    username: "selu",
    email: "selu@gmail.com",
    password: "password",
    isLogInPage: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePages = () => {
    this.setState({
      isLogInPage: !this.state.isLogInPage
    });
  };

  handleSignUpSubmit = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    await axios
      .post("localhost:3000/api/v1/user/signup", {
        username,
        email,
        password
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // handleSignInSubmit = e => {
  //   e.preventDefault();
  //   axios.get("").then(res => {});
  // };

  handleGet = () => {
    axios.get("localhost:3000/api/").then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        {this.state.isLogInPage ? (
          <SignIn
            form={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSignUpSubmit}
          />
        ) : (
            <SignUp
              form={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSignUpSubmit}
            />
          )}
      </div>
    );
  }
}

export default App;