import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LoginStyle } from './login';

export default function Login() {
  const { control } = useForm();
  return (
    <LoginStyle>
      <Grid container mt={2} spacing={{ xs: 2, md: 4 }}>
        <Grid
          xs={12}
          container
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          item
        >
          <Typography variant="h4">ثبت نام</Typography>
        </Grid>
        <Grid xs={12} md={6} item>
          <Controller
            name="frist_name"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                fullWidth
                label="نام"
                name="frist_name"
                variant="outlined"
                {...{ field }}
              />
            )}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                fullWidth
                label="نام خانوادگی"
                name="last_name"
                variant="outlined"
                {...{ field }}
              />
            )}
          />
        </Grid>
        <Grid xs={12} item>
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                fullWidth
                label="شماره تلفن"
                name="phone_number"
                variant="outlined"
                {...{ field }}
              />
            )}
          />
        </Grid>
        <Grid xs={12} item>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                fullWidth
                label="پسورد"
                name="password"
                variant="outlined"
                {...{ field }}
              />
            )}
          />
        </Grid>
        <Grid xs={12} container justifyContent={'flex-end'} item>
          <Button variant="contained" color="primary">
            ثبت نام
          </Button>
        </Grid>
      </Grid>
    </LoginStyle>
  );
}
