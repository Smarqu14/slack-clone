import React, { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessageHeader extends Component {
  render() {
    return (
      <Segment clearing>
        {/* Channel Tittle */}
        <Header fluid="true" as="h2" floaded="left" style={{ marginBottom: 0 }}>
          <span>
            Channel
            <Icon name="star outline" color="black" />
          </span>
          <Header.Subheader>2 Users</Header.Subheader>
        </Header>
        {/* Channel Search Input */}
        <Header floaded="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessageHeader;
