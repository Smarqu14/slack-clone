import React, { Component, Fragment } from "react";
import { Button, Menu, Icon, Modal, Form, Input } from "semantic-ui-react";
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions";

class Channels extends Component {
  state = {
    user: this.props.currentUser,
    channels: [],
    modal: false,
    channelName: "",
    channelDetails: "",
    channelsRef: firebase.database().ref("channels"),
    firstLoad: true,
    activeChannel: "",
  };

  componentDidMount() {
    this.addListerners();
  }

  addListerners = () => {
    let loadedChannels = [];
    this.state.channelsRef.on("child_added", (snap) => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
    });
  };

  setFirstChannel = () => {
    const firstChannel = this.state.channels[0];

    if (this.state.firstLoad && this.state.channels.length > 0) {
      this.props.setCurrentChannel(firstChannel);
      this.setActiveChannel(firstChannel);
    }

    this.setState({
      firstLoad: false,
    });
  };

  addChannel = () => {
    const { channelsRef, channelName, channelDetails, user } = this.state;

    const key = channelsRef.push().key;

    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL,
      },
    };

    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDetails: "" });
        this.closeModal();
        console.log("Channel added");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };

  changeChanel = (channel) => {
    this.setActiveChannel(channel);
    this.props.setCurrentChannel(channel);
  };

  setActiveChannel = (channel) => {
    this.setState({
      activeChannel: channel.id,
    });
  };

  displayChannels = (channels) =>
    channels.length > 0 &&
    channels.map((channel) => (
      <Menu.Item
        key={channel.id}
        onClick={() => this.changeChanel(channel)}
        name={channel.name}
        style={{ opacity: 0.7 }}
        active={channel.id === this.state.activeChannel}
      >
        # {channel.name}{" "}
      </Menu.Item>
    ));

  isFormValid = ({ channelName, channelDetails }) =>
    channelDetails && channelName;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  openModal = () => this.setState({ modal: true });
  closeModal = () => {
    console.log("Clicked");
    this.setState({ modal: false });
  };

  render() {
    const { channels, modal } = this.state;
    return (
      <Fragment>
        <Menu.Menu style={{ paddingBottom: "2em" }}>
          <Menu.Item>
            <span>
              <Icon name="exchange" />
              Channels
            </span>{" "}
            ({channels.length})<Icon name="add" onClick={this.openModal} />
          </Menu.Item>
          {this.displayChannels(channels)}
        </Menu.Menu>
        {/* // add chanel modal */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Chanel</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Input
                  fluid
                  label="Name of Chanel"
                  name="channelName"
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <Input
                  fluid
                  label="About the channel"
                  name="channelDetails"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Add
            </Button>

            <Button color="red" onClick={this.closeModal} inverted>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(null, { setCurrentChannel })(Channels);
