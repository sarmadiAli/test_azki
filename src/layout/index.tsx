import React, { useEffect, useLayoutEffect } from 'react';
import HeaderAzki from './headerAzki';
import { Alert, Box, Grid, Snackbar } from '@mui/material';
import Image from 'next/image';
import svgIcon from './../../public/assets/icons/car-green.svg';
import { LayoutContainerStyled } from './style';
import { useMyContextSnackBar } from 'src/context/snackBarContext';
import { stat } from 'fs';
import { useMyContext } from 'src/context/myContext';
import { Profile } from 'src/context/types';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = useMyContextSnackBar();
  const { state: ss, dispatch: loginDispatch } = useMyContext();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({
      type: 'OPEN_SNACKBAR',
      payload: {
        open: false,
        value: '',
        type: '',
      },
    });
  };
  useEffect(() => {
    const storedProfileString: string | null = localStorage.getItem('profile');
    const profile: Profile | null = storedProfileString
      ? JSON.parse(storedProfileString)
      : null;
    if (profile) {
      loginDispatch({
        type: 'LOGIN',
        payload: {
          ...profile,
          login: true,
        },
      });
    }
  }, [loginDispatch]);
  return (
    <>
      <HeaderAzki />
      <LayoutContainerStyled container height={'100vh'}>
        <Grid margin={'80px 0'} item xs={12} md={7} xl={7}>
          <main>{children}</main>
        </Grid>
        <Grid item justifyContent={'flex-end'} container xs={12} md={5} xl={5}>
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
        <Snackbar
          open={state.open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleClose}
            severity={state.type}
            sx={{ width: '100%' }}
          >
            {state.value}
          </Alert>
        </Snackbar>
      </LayoutContainerStyled>
    </>
  );
}
