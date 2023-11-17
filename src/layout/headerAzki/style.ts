import { styled } from '@mui/material';

export const HeaderStyle = styled('header')`
  position: fixed;
  top: 0;
  padding: 20px 30px;
  width: 100%;
  z-index: 999;
  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 16px;
  }
`;
