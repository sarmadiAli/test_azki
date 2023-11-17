import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Arrow from '../svgs/Arrow';
import useDiscount from 'src/hooks/useDiscount';
import dynamic from 'next/dynamic';
import { useMyContext } from 'src/context/myContext';

const CodeSampleModal = dynamic(() => import('./../modal'), {
  ssr: false,
});
interface FormValues {
  discont1: {
    title: '';
  };
  discont2: {
    title: '';
  };
}

export default function Discounts() {
  const { data, isLoading } = useDiscount();
  const [open, setOpen] = useState(false);
  const { dispatch } = useMyContext();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const modalAction = (data: FormValues) => {
    dispatch({
      type: 'CHOOSE_DISCOUNTS',
      payload: data,
    });
    setOpen(true);
  };
  return (
    <form onSubmit={handleSubmit(modalAction)}>
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
            name="discont1"
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
                    error={!!errors.discont1}
                    helperText={errors?.discont1?.message || null}
                    label="درصد تخفیف ثالث"
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="discont2"
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
                    error={!!errors.discont2}
                    helperText={errors?.discont2?.message}
                    label="درصد تخفیف حوادث راننده"
                  />
                )}
              />
            )}
          />
        </Grid>

        <Grid container justifyContent={'flex-end'} item xs={12}>
          <Button
            type="submit"
            sx={{
              width: '150px',
              padding: '10px 16px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            variant="outlined"
          >
            <Typography>استعلام قیمت</Typography>
            <Arrow />
          </Button>
        </Grid>
      </Grid>
      {open && (
        <CodeSampleModal isOpen={open} closeModal={() => setOpen(false)} />
      )}
    </form>
  );
}
