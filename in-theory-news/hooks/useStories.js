// custom hook for API fetch
// uses swr (stale while revalidate) library (5kb)
// serves data first from cache

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useStories = () => {
  const { data, error } = useSWR(
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
