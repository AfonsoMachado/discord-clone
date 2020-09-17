import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  // Hook useref
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // Colocando o scroll para baixo assim que a pagina é carregada
  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {/* gerando varias mensagens para exemplificar o scroll */}
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Afonso Machado"
            date="17/09/2020"
            content="Fala irmão, tudo beleza?"
          />
        ))}

        <ChannelMessage
          author="Jabba The Hutt"
          date="17/09/2020"
          content={
            <>
              <Mention>@Afonso Machado</Mention>, Jabba won neechee kochba mu
              shanee wy tonny wya uska!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
