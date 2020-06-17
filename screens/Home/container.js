import React, { Component } from "react";
import HomeScreen from "./presenter";

class Container extends Component {
    state = {
      isFetching: false,
      homeImage: []
    };

  componentDidMount = () => {
    const { getHome } = this.props;

    getHome()

    if(this.props.home) {
      this.setState({
        isFetching: true,
        homeImage: this.props.home
      })
    }
  };

  render() {
    return (
        <HomeScreen
          {...this.props}
          {...this.state}
        />
    );
  }
}

export default Container;
