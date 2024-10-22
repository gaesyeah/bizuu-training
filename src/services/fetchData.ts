import {useQuery} from 'react-query';
import {Product} from '../types/product';
import axios from 'axios';

export const useFetchData = (
  params: string,
): {
  data?: Product[];
  isError: boolean;
  isLoading: boolean;
} => {
  return useQuery<Product[], Error>('repoData', async () => {
    try {
      const {data} = await axios.get<Product[]>(
        `${process.env.API_URL}/${params}`,
      );

      //simulando uma espera de 3 segundos para que o loading seja visualizado
      await new Promise(resolve => setTimeout(resolve, 3000));

      return data;
    } catch (err: unknown) {
      console.error(err);
      throw new Error('Error fetching data');
    }
  });
};
