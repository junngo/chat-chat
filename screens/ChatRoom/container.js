import React, { Component } from "react"
import ChatRoomScreen from "./presenter";
import Websocket from 'react-websocket';

class Container extends Component {
	constructor(props){
        super(props);
      this.state = { messages : [], isSubmitting: false }
    }
  
    handleData(data) {
      alert(data);
    }
    handleOpen()  {
      alert("connected:)");
    }
    handleClose() {
      alert("disconnected:(");
    }
    sendMessage(message){
      this.refWebSocket.sendMessage(message);
    }
  
    _changeMessage = text => {
      this.setState({ message: text });
    };
    _submit = () => {
      const { message } = this.state;
      this.sendMessage(
        JSON.stringify({'message': message})
      );
    };

    render() {
        return(
            <>
                <ChatRoomScreen 
                    changeMessage={this._changeMessage}
                    submit={this._submit}
                />
                <Websocket url='ws://127.0.0.1:8000/ws/chat/good/' 
                    onMessage={this.handleData}
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    reconnect={true} 
                    debug={true}
                    ref={Websocket => {
                         this.refWebSocket = Websocket;
                    }}
                />
            </>
        )
    }
}

export default Container;
