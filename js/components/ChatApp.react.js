import React from 'react';
import MessageSection from './MessageSection.react';
import ThreadSection from './ThreadSection.react';
import * as Actions from '../actions';
import { threadsSource, currentMessagesSource, unreadCountSouce } from '../store/store';
import { subscribe } from 'river-react';

class ChatApp extends React.Component {
  render() {
    return (
      <div className="chatapp">
        <ThreadSection
          threads={this.props.threads}
          unreadCount={this.props.unreadCount}
        />
        <MessageSection messages={this.props.messages} />
      </div>
    );
  }
};

export default subscribe(ChatApp, {
  threads: threadsSource,
  messages: currentMessagesSource,
  unreadCount: unreadCountSouce
}, {
  threads: [],
  messages: [],
  unreadCount: null
});
