import React from 'react';
import CarsComponent from '../components/cars';
import { GetServerSidePropsContext } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getVehicle } from 'src/service';

function carPage() {
  return <CarsComponent />;
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    const getVehicleTypes = await getVehicle('vehicle/types');
    await queryClient.prefetchQuery(['vehicle'], () => getVehicleTypes);
  } catch (error) {}

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default carPage;
