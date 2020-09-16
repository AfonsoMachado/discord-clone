import styled from 'styled-components';

// SL = Server list
// SM = Server name
// CI = Channel Info
// CL = Channel list
// CD = Channel data
// UL = User list
// UI = User info

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  /* Estrutura de grid da pagina */
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
`;
