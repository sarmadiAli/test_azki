import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from './../../../public/assets/icons/logo.svg';
import Image from 'next/image';
import { HeaderStyle } from './style';
import { useMyContext } from 'src/context/myContext';
import Link from 'next/link';
import svf from 'public/assets/icons/user.svg';
export default function HeaderAzki() {
  const { state } = useMyContext();
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
          {state.login.login ? (
            <Button variant="text">
              <Image alt="userImgs" src={svf} height={20} width={20} />
              <Typography variant="body2" ml={1}>
                {state.login.frist_name}
                {state.login.last_name}
              </Typography>
            </Button>
          ) : (
            <Link href={'/'}>
              <Button style={{ padding: '8px 16px' }} variant="text">
                <Typography variant="body2">ثبت نام</Typography>
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </HeaderStyle>
  );
}
