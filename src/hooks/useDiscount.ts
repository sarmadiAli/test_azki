import { useQuery } from '@tanstack/react-query';
import { getDiscountss } from 'src/service';

const useDiscount = () => {
  return useQuery({
    queryKey: ['discounts'],
    queryFn: () => getDiscountss('third/third-discounts'),
  });
};

export default useDiscount;
