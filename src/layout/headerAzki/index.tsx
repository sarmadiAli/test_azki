import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from './../../../public/assets/icons/logo.svg';
import Image from 'next/image';
import { HeaderStyle } from './style';

export default function HeaderAzki() {
  return (
    <HeaderStyle>
      <Grid container alignItems={'center'}>
        <Grid container xs={2} item>
          <Image src={logo} width={20} height={20} alt="azki" />
        </Grid>
        <Grid
          container
          justifyContent={{ xs: 'flex-end', md: 'center' }}
          xs={6}
          item
        >
          <Typography variant="subtitle2">
            سامانه مقایسه و خرید انلاین بیمه
          </Typography>
        </Grid>
        <Grid container justifyContent={'flex-end'} xs={4} item>
          <Button variant="text">
            <Typography variant="body2">ثبت نام</Typography>
          </Button>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
}
