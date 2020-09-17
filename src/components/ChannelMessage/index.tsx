import React from 'react';

import { Container } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC = () => {
  return (
    <Container>
      <h1>ChannelMessage</h1>
    </Container>
  );
};

export default ChannelMessage;
