import React from 'react';
import HeaderAzki from './headerAzki';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import svgIcon from './../../public/assets/icons/car-green.svg';
import { LayoutContainerStyled } from './style';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAzki />
      <LayoutContainerStyled container height={'100vh'}>
        <Grid margin={'80px 0'} item xs={12} md={7} xl={7}>
          <main>{children}</main>
        </Grid>
        <Grid justifyContent={'flex-end'} container xs={12} md={5} xl={5}>
          <Grid
            className="carImgsContainer"
            container
            item
            justifyContent={'flex-end'}
            xs={12}
            md={8}
            xl={8}
          >
            <Image className="carImgs" src={svgIcon} alt="a" sizes="100px" />
          </Grid>
        </Grid>
      </LayoutContainerStyled>
    </>
  );
}
