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

  margin-bottom: 8px;

  /* usando a cor do discord para caso seja o botão da home */
  background-color: ${(props) => (props.isHome ? '#7289DA' : 'var(--primary)')};

  position: relative;
  cursor: pointer;
`;
