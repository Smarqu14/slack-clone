import React, { Component, Fragment } from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessageHeader from "./MessageHeader";
import MessageForm from "./MessageForm";
import firebase from "../../firebase";

export default class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    channel: this.props.currentChannel,
    currentUser: this.props.currentUser,
  };
  render() {
    const { messagesRef, channel, currentUser } = this.state;

    return (
      <Fragment>
        <MessageHeader />
        <Segment>
          <Comment.Group className="messages">{/* Messages */}</Comment.Group>
        </Segment>
        <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={currentUser}
        />
      </Fragment>
    );
  }
}
