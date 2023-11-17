import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Insurance from '../svgs/Insurance';
import { useMyContext } from 'src/context/myContext';
import { useRouter } from 'next/router';

export default function ChooseInsurance() {
  const router = useRouter();
  const { dispatch } = useMyContext();

  return (
    <Grid container mt={5} spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">انتخاب بیمه</Typography>
      </Grid>
      <Grid spacing={4} container item xs={12}>
        <Grid item>
          <Button
            onClick={() => {
              dispatch({
                type: 'CHOOSE_INSURANCE',
                payload: {
                  chooseInsurance: 'second',
                },
              });
              router.push('/cars');
            }}
            sx={{
              flexDirection: 'column',
              padding: '25px',
              borderRadius: '15px',
              // width: '140px',
            }}
            variant="outlined"
            color="secondary"
          >
            <Insurance
              style={{
                fill: 'black',
                width: '40',
                height: '40',
              }}
            />
            <Typography mt={1}>شخص ثالث</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              flexDirection: 'column',
              padding: '25px',
              borderRadius: '15px',
              width: '130px',
            }}
            variant="outlined"
            color="secondary"
            disabled={true}
          >
            <Insurance
              style={{
                fill: 'rgba(0, 0, 0, 0.26)',
                width: '40',
                height: '40',
              }}
            />
            <Typography mt={1}>بدنه </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
