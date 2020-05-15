import React, { Component } from "react";
import AuthScreen from "./presenter";
import { Alert, Text } from "react-native";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  _changeUsername = text => {
    this.setState({ username: text });
  };

  _changePassword = text => {
    this.setState({ password: text });
  };

  _submit = () => {
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
  };

  render() {
    return (
      <AuthScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }
}

export default Container;
