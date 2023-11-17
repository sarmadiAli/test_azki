import { useQuery } from '@tanstack/react-query';
import { getVehicle } from 'src/service';

const useQuestionVehicl = () => {
  return useQuery({
    queryKey: ['vehicle'],
    queryFn: () => getVehicle('vehicle/types'),
  });
};

export default useQuestionVehicl;
