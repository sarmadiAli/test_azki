import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Arrow from '../svgs/Arrow';
import useVehicle from 'src/hooks/useVehicle';
import { useRouter } from 'next/router';
import { useMyContext } from 'src/context/myContext';

interface FormValues {
  vehicle: {
    id: number | null;
    title: string;
  };
  types: {
    id: number | null;
    title: string;
  };
}

export default function CarsComponent() {
  const { data, isLoading } = useVehicle();
  const [types, setTypes] = useState([]);
  const router = useRouter();
  const { state, dispatch } = useMyContext();
  const {
    control,
    formState: { errors },
    handleSubmit,
    resetField,
    reset,
  } = useForm<FormValues>();
  const handlerSub = (data: FormValues) => {
    dispatch({
      type: 'CHOOSE_CARS',
      payload: data,
    });
    router.push('/companies');
  };

  return (
    <form onSubmit={handleSubmit(handlerSub)}>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5"> بیمه شخص ثالث</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            نوع و مدل خودروی خود را انتخاب کنید
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Controller
            name="vehicle"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                disablePortal
                options={data || []}
                // name="vehicle"
                value={value}
                loading={isLoading}
                onChange={(e, newValue) => {
                  onChange(newValue ?? {});
                  setTypes(
                    data.find((ele: any) => ele.id === newValue?.id).usages
                  );
                  resetField('types');
                }}
                getOptionLabel={(option: any) => {
                  if (option.title) return option.title;
                  return option;
                }}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.vehicle}
                    helperText={errors?.vehicle?.message || null}
                    label="نوع خودرو"
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Controller
            name="types"
            control={control}
            rules={{
              required: { value: true, message: 'این فیلد الزامی است' },
            }}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                disablePortal
                options={types || []}
                loading={isLoading}
                value={value}
                onChange={(e, newValue) => {
                  onChange(newValue ?? '');
                }}
                getOptionLabel={(option: any) => {
                  if (option.title) return option.title;
                  return option;
                }}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.types}
                    helperText={errors?.types?.message}
                    label="مدل خودرو"
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button
            onClick={router.back}
            className="azkiBtn rotateSvg"
            variant="outlined"
          >
            <Arrow />
            <Typography>بازگشت</Typography>
          </Button>
        </Grid>
        <Grid container justifyContent={'flex-end'} item xs={12} lg={6}>
          <Button type="submit" className="azkiBtn" variant="outlined">
            <Typography> مرحله بعد</Typography>
            <Arrow />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
