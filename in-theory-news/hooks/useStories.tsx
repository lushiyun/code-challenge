// custom hook for API fetch
// uses swr (stale while revalidate) library (5kb)
// serves data first from cache
import useSWR from 'swr';

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

type Multimedia = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export type Result = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia?: Multimedia[];
  short_url: string;
}

export type Data = {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: Result[];
}
