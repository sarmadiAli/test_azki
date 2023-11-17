import { QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';
import Discounts from 'src/components/discounts';
import { getDiscountss } from 'src/service';

export default function DiscountsPage() {
  return <Discounts />;
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    const discounts = await getDiscountss('third/third-discounts');
    await queryClient.prefetchQuery(['discounts'], () => discounts);
  } catch (error) {}

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
