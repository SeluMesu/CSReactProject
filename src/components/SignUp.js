import React, { Component } from "react";
import './css/style.css'
class Signup extends Component {
  render() {
    return (
      <section className="wrapper">
        <section className="main-content">
          <h3>Join Us</h3>
          <div className="log-in">
            <form onSubmit={this.props.handleSubmit} name="login-form">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  onChange={this.props.handleChange}
                  type="text"
                  value={this.props.form.username}
                  name="username"
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.props.handleChange}
                  type="email"
                  value={this.props.form.email}
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.props.handleChange}
                  type="password"
                  value={this.props.form.password}
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <button
                id="sub-btn"
                type="submit"
                name="button"
                disabled={
                  !this.props.form.email |
                  !this.props.form.password |
                  !this.props.form.username
                }
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </section>
    );
  }
}

export default Signup;