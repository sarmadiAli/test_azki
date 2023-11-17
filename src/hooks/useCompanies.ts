import { useQuery } from '@tanstack/react-query';
import { getCompanies, getVehicle } from 'src/service';

const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies('third/companies'),
  });
};

export default useCompanies;
