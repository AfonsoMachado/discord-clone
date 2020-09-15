import styled from 'styled-components';

// recebendo as props
import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* evitar botão ser expremido */
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  /* usando a cor do discord para caso seja o botão da home */
  background-color: ${(props) =>
    props.isHome ? 'var(--discord-logo)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  /* tamanho do logo home */
  > img {
    width: 30px;
    height: 30px;
  }

  &::before {
  }

  &::after {
  }

  transition: border-radius 0.2s, background-color 0.2s;

  /* Animações */
  &:active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? 'var(--discord-logo)' : 'var(--discord)'};
  }
`;
