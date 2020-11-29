// custom hook for API fetch
// uses swr (stale while revalidate) library (5kb)
// serves data first from cache
import useSWR from 'swr';
import { Data } from '../models/data';

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const useStories = () => {
  const { data, error } = useSWR<Data, Error>(
    'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil',
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useStories;
