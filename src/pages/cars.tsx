import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import svgIcon from './../../public/assets/icons/insurance.svg';
import Image from 'next/image';

export default function CarsComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>انتخاب بیمه</Typography>
      </Grid>
      <Grid spacing={4} container item xs={12}>
        <Grid item>
          <Button
            sx={{
              flexDirection: 'column',
              padding: '25px',
              borderRadius: '15px',
            }}
            variant="outlined"
            color="secondary"
          >
            <Image src={svgIcon} width={40} height={40} alt="ایکون شخص ثالث" />
            <Typography mt={1}>شخص ثالث</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              flexDirection: 'column',
              padding: '25px',
              borderRadius: '15px',
            }}
            variant="outlined"
            color="secondary"
            disabled={true}
          >
            <Image src={svgIcon} width={40} height={40} alt="ایکون شخص ثالث" />
            <Typography mt={1}>شخص ثالث</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
