import useStories from '../hooks/useStories';
import Spinner from './Spinner';
import Story from './Story';

const StoriesList = () => {
  //data served from cache; only one http fetch call
  const { data, isLoading, isError } = useStories();

  if (isLoading) return <Spinner />;

  return (
    <section className="stories">
      {data.results.map((story) => (
        <article
          //no id returned; short_url serves as unique key
          key={story.short_url}
          className={
            //headline class for firs story in the list
            story.short_url === data.results[0].short_url ? 'headline' : 'story'
          }>
          <Story story={story} />
        </article>
      ))}
    </section>
  );
};

export default StoriesList;
