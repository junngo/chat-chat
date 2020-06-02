import React, { Component } from "react";
import ChatScreen from "./presenter";

class Container extends Component {
  _submit = () => {
    const { createChatRoom } = this.props;
    createChatRoom();
  }

  render() {
    return (
      <>
        <ChatScreen
          onPressChat={this._submit}
        />
      </>
    );
  }
}

export default Container;
