import React from 'react';
import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Afonso Machado"
          date="17/09/2020"
          content="Fala irmão, tudo beleza?"
        />

        {/* <ChannelMessage
          author="Jabba The Hutt"
          date="17/09/2020"
          content={
            <>
              <Mention>@Afonso Machado</Mention>, Jabba won neechee kochba mu
              shanee wy tonny wya uska!
            </>
          }
        /> */}
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
