import { QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';
import Companies from 'src/components/companies';
import { getCompanies } from 'src/service';
function Cars() {
  return <Companies />;
}
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    const companies = await getCompanies('third/companies');
    await queryClient.prefetchQuery(['companies'], () => companies);
  } catch (error) {}

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Cars;
