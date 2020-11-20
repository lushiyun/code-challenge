import { useRouter } from 'next/router';
// for fuzzy search
import Fuse from 'fuse.js';

import useStories from '../../hooks/useStories';
import Layout from '../../components/Layout';
import Story from '../../components/Story';
import Spinner from '../../components/Spinner';

const Section = () => {
  const router = useRouter();
  const { term } = router.query;
  // served from cache
  const { data, isLoading, isError } = useStories();

  const renderedResults = (stories) => {
    const fuse = new Fuse(stories, {
      keys: ['title', 'byline', 'section'],
    });

    // sorted by relevance
    const searchResults =
      term && fuse.search(term).map((result) => result.item);

    return (
      <>
        <h2 className="search__term">{term}</h2>

        <section className="stories">
          {searchResults &&
            searchResults.map((story) => (
              <article key={story.short_url} className="headline">
                <Story story={story} />
              </article>
            ))}
        </section>
      </>
    );
  };

  return (
    <Layout>{isLoading ? <Spinner /> : renderedResults(data.results)}</Layout>
  );
};

export default Section;
