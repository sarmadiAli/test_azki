import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import svgIcon from './../../../public/assets/icons/insurance.svg';
import Image from 'next/image';

export default function CarsComponent() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>انتخاب بیمه</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={6}>
          <Button>
            <Image src={svgIcon} width={40} height={40} alt="ایکون شخص ثالث" />
            <Typography>شخص ثالث</Typography>
          </Button>
        </Grid>
        <Grid container item xs={6}>
          <Button></Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
