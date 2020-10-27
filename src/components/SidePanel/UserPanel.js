import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";

export default class UserPanel extends Component {
  dropdownOptions = () => [
    {
      text: (
        <span>
          Signed in<strong>User</strong>
        </span>
      ),
      disabled: true,
      key: "user",
    },
    {
      text: <span>Change Avatar</span>,
      key: "avatar",
    },
    {
      text: <span>Signed Out</span>,
      key: "signout",
    },
  ];
  render() {
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* {App header} */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
          </Grid.Row>
          {/* UserDropDown */}
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown
              trigger={<span>Users</span>}
              options={this.dropdownOptions()}
            ></Dropdown>
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}
