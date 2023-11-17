import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LoginStyle } from './login';
import { error } from 'console';
import { useMyContextSnackBar } from 'src/context/snackBarContext';
import { useMyContext } from 'src/context/myContext';
import { useRouter } from 'next/router';

type formType = {
  frist_name: string;
  last_name: string;
  phone_number: string;
  password: string;
};

export default function Login() {
  const { dispatch } = useMyContextSnackBar();
  const { dispatch: dispatchLogin } = useMyContext();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formType>();
  const handlerLogin = (data: formType) => {
    localStorage.setItem('profile', JSON.stringify(data));
    dispatchLogin({
      type: 'LOGIN',
      payload: {
        ...data,
        login: true,
      },
    });
    dispatch({
      type: 'OPEN_SNACKBAR',
      payload: {
        open: open,
        value: 'ورود با موفقیت انجام شد',
        type: 'success',
      },
    });
    reset();
    router.push('/chooseInsurance');
  };
  return (
    <LoginStyle onSubmit={handleSubmit(handlerLogin)}>
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
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: 'نام خود را به فارسی وارد کنید',
              },
            }}
            render={({ field }) => (
              <TextField
                error={!!errors.frist_name}
                helperText={errors?.frist_name?.message}
                size="small"
                fullWidth
                label="نام"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: 'نام خانوادگی خود را به فارسی وارد کنید',
              },
            }}
            render={({ field }) => (
              <TextField
                error={!!errors.last_name}
                helperText={errors?.last_name?.message}
                size="small"
                fullWidth
                label="نام خانوادگی"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12} item>
          <Controller
            name="phone_number"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              pattern: {
                value: /^(\+98|0)?9\d{9}$/g,
                message: 'شماره تلفن را به درستی وارد کنید',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.phone_number}
                helperText={errors?.phone_number?.message}
                size="small"
                fullWidth
                label="شماره تلفن"
                name="phone_number"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid xs={12} item>
          <Controller
            name="password"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
              maxLength: { value: 10, message: 'حداکثر باید 10 کاراکتر باشد' },
              minLength: { value: 4, message: 'حداقل باید 4 کاراکتر باشد' },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
                message:
                  'رمزعبور باید ترکیبی از حداقل یک حروف بزرگ و اعداد باشد',
              },
            }}
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                helperText={errors?.password?.message}
                size="small"
                fullWidth
                label="پسورد"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12} container justifyContent={'flex-end'} item>
          <Button type="submit" variant="contained" color="primary">
            ثبت نام
          </Button>
        </Grid>
      </Grid>
    </LoginStyle>
  );
}
