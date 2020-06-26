import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeScreen from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    getHome: PropTypes.func.isRequired,
    home: PropTypes.array
  };

  componentDidMount() {
  const { getHome } = this.props;
    if (!this.props.home) {
      getHome();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.home) {
      this.setState({
        loading: false,
        home: nextProps.home
      });
    }
  };

  render() {
    const { home } = this.props;
    return (
        <HomeScreen
          {...this.state}
          home={home}
        />
    );
  }
}

export default Container;
