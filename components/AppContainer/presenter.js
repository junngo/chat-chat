import React, { Component } from "react";
import PropTypes from "prop-types";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from "../../navigation/AuthNavigation";
import ChatNavigation from "../../navigation/ChatNavigation";


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
              <NavigationContainer>
                <ChatNavigation />
              </NavigationContainer>
            ) : (
              <AuthNavigation />
            )
        }
      </>
    );
  }
}

export default AppContainer;
