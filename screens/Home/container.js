import React, { Component } from "react";
import HomeScreen from "./presenter";

class Container extends Component {
    state = {
      isFetching: false
    };

  componentDidMount = () => {
    const { getHome } = this.props;

    getHome()
    this.setState({
      isFetching: true
    })
  };

  componentDidUpdate = (prevProps) => {
    if(this.props.home) {
      this.setState({
        isFetching: true
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
