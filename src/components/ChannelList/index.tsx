import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="overwatch" /> */}
    </Container>
  );
};

export default ChannelList;
