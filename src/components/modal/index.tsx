import { Modal } from '@mui/base';
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import Done from '../svgs/Done';
import { useMyContext } from 'src/context/myContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  zIndex: 8000,
};

export default function ModalAzki({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) {
  const { state } = useMyContext();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          width: isMobile ? '100%' : '600px',
        }}
      >
        <Grid container spacing={3} justifyContent={'center'}>
          <Grid xs item container justifyContent={'center'}>
            <Done />
          </Grid>
          <Grid item xs={12}>
            <Alert security="success">استعلام بیمه با موفقیت انجام شد</Alert>
          </Grid>
          <Grid item container xs={12}>
            <Divider flexItem sx={{ width: '100%' }} />
          </Grid>
          <Grid item mt={1} spacing={2} container xs={9}>
            <Grid item container xs={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="caption">نام و نام خانوادگی :</Typography>
              </Grid>
              <Grid>
                <Typography fontWeight={500}>
                  {' '}
                  {state.login.frist_name}-{state.login.last_name}{' '}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="caption"> نام بیمه:</Typography>
              </Grid>
              <Grid>
                <Typography fontWeight={500}> شخص ثالث</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="caption"> نوع و مدل خودرو:</Typography>
              </Grid>
              <Grid>
                <Typography fontWeight={500}>
                  {state.cars.vehicle?.title}-{state.cars.types?.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="caption"> بیمه‌گر قبلی:</Typography>
              </Grid>
              <Grid>
                <Typography fontWeight={500}>
                  {' '}
                  {state.companies?.company}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent={'space-between'}>
              <Grid>
                <Typography variant="caption">
                  {' '}
                  درصد تخفیف ثالث و حوادث راننده
                </Typography>
              </Grid>
              <Grid>
                <Typography fontWeight={500}>
                  {' '}
                  {state.discounts?.discont1} - {state.discounts?.discont2}{' '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent={'flex-end'} item xs={12}>
            <Button onClick={closeModal} variant="contained">
              بستن
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
