import React from 'react';
import ReactDOM from 'react-dom';
import './store/store';
import { requestMessages } from './actions';
import ChatApp from './components/ChatApp.react';

requestMessages();

ReactDOM.render(
  <ChatApp />,
  document.getElementById('react')
);
