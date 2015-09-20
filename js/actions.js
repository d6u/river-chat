import Rx from 'rx';
import { createAction } from 'river-react';

export let clickThreadSubject = new Rx.Subject();
export let createMessageSubject = new Rx.Subject();
export let requestMessagesSubject = new Rx.Subject();

export let clickThread = createAction(clickThreadSubject);
export let createMessage = createAction(createMessageSubject);
export let requestMessages = createAction(requestMessagesSubject);
