import { useRouter } from 'next/router';
import useStories from '../hooks/useStories';
import Layout from '../components/Layout';
import Story from '../components/Story';
import Spinner from '../components/Spinner';

const Section = () => {
  const router = useRouter();
  const { section } = router.query;
  const { data, isLoading, isError } = useStories();

  const renderedStories = (data) => {
    const sectionStories = data.results.filter(
      (story) => story.section === section
    );

    return (
      <section className="stories">
        {sectionStories.map((story) => (
          <article key={story.short_url} className="story">
            <Story story={story} />
          </article>
        ))}
      </section>
    );
  };

  return <Layout>{isLoading ? <Spinner /> : renderedStories(data)}</Layout>;
};

export default Section;
