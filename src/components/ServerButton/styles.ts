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

  /* NOTIFICAÇÃO */
  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    /* pseudoelement */
    content: '';
    /* se tiver notificações o elemento aparece, senão fica oculto */
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  /* STATUS */
  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    /* Se tiver props.mentions, exibe o elemento */
    content: '${(props) => props.mentions && props.mentions}';
    /* se tem notificações e elas são maiores que zero, exibe na tela */
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
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
