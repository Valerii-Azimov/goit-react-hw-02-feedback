import React from 'react';
import { MessageError } from './styles';

export default function Message({ NotificationMessage }) {
  return <MessageError>{NotificationMessage}</MessageError>;
}
