import React from 'react';

import { Container, Role, User, Avatar } from './styles';

// Variáveis usadas nos componentes
interface UserProps {
  nickname: string;
  isBot?: boolean;
}

// Componente interno
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Afonso Machado" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Jabba The Hutt" isBot />
    </Container>
  );
};

export default UserList;
