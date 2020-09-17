import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  /* Altura maxima da tela menos a barra superior */
  max-height: calc(100vh - 46px);

  /* implementando a scroll bar */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* parte de cima da scrollbar */
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  /*  parte de baixo da scrollbar */
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;

  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  /* Nome do usuario */
  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    /* cortando o nome, gerando redicencias  */
    white-space: nowrap;
    /* isnerindo reticencias em textos que faltam */
    text-overflow: ellipsis;
    /* tudo o que passa da tela nao aparece */
    overflow: hidden;
  }

  /* Tag de BOT */
  > span {
    margin-left: 9px;

    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  /* para nao ficar esmagado/oval */
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;
