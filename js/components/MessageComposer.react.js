import React, { Component, PropTypes } from 'react';
import { createMessage } from '../actions';

let ENTER_KEY_CODE = 13;

class MessageComposer extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <textarea
        className="message-composer"
        name="message"
        value={this.state.text}
        onChange={::this._onChange}
        onKeyDown={::this._onKeyDown}
      />
    );
  }

  _onChange(event, value) {
    this.setState({text: event.target.value});
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      let text = this.state.text.trim();
      if (text) {
        createMessage({
          text,
          threadID: this.props.threadID
        });
      }
      this.setState({text: ''});
    }
  }

};

MessageComposer.propTypes = {
  threadID: PropTypes.string.isRequired
};

export default MessageComposer;
