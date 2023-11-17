import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Arrow from '../svgs/Arrow';
import { useRouter } from 'next/router';
import useCompanies from 'src/hooks/useCompanies';
import { useMyContext } from 'src/context/myContext';

interface FormValues {
  company?: {
    title: '';
  };
}

export default function Companies() {
  const router = useRouter();
  const { data, isLoading } = useCompanies();
  const { dispatch } = useMyContext();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({});
  const next = (data: any) => {
    dispatch({
      type: 'CHOOSE_COMPANIES',
      payload: data,
    });
    router.push('/discounts');
  };
  return (
    <form onSubmit={handleSubmit(next)}>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5"> بیمه شخص ثالث</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            نوع و مدل خودروی خود را انتخاب کنید
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="company"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                disablePortal
                options={data || []}
                // name="city"
                loading={isLoading}
                value={value}
                onChange={(e, newValue) => {
                  onChange(newValue?.title ?? '');
                }}
                getOptionLabel={(option: any) => {
                  if (option.title) return option.title;
                  return option;
                }}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.company}
                    helperText={errors?.company?.message || null}
                    label="شرکت بیمه‌گر قبلی"
                  />
                )}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Button
            onClick={router.back}
            className="azkiBtn rotateSvg"
            variant="outlined"
          >
            <Arrow />
            <Typography>بازگشت</Typography>
          </Button>
        </Grid>
        <Grid container justifyContent={'flex-end'} item xs={6}>
          <Button className="azkiBtn " variant="outlined" type="submit">
            <Typography> مرحله بعد</Typography>
            <Arrow />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
