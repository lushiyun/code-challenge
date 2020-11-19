// Custom hook for fetching news stories from NY Times API
// It uses the swr (stale while revalidate) library (5kb)
// swr is a strategy to first return the data from cache (stale)
// then send the fetch request (revalidate)
// It makes managing "global state" easy
// https://swr.vercel.app/

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
