import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import AuthNavigation from "../../navigation/AuthNavigation";
import MainNavigation from "../../navigation/MainNavigation";

MainNavigation
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          <AuthNavigation />
            ) : (
          <MainNavigation />
        )}
      </>
    );
  }
}

export default AppContainer;
