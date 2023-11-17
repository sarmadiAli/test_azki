import { Grid, styled } from '@mui/material';

export const LayoutContainerStyled = styled(Grid)`
  main {
    width: 70%;
    margin: auto;

    ${(props) => props.theme.breakpoints.down('md')} {
      width: 90%;
    }
  }
  .carImgsContainer {
    background: rgb(254, 247, 221);
    position: relative;
  }
  .carImgs {
    position: absolute;
    bottom: 15px;
    right: 20px;
    height: auto;
    width: 170% !important;
    ${(props) => props.theme.breakpoints.down('md')} {
      width: 400px !important;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 340px !important;
    }
  }
`;
