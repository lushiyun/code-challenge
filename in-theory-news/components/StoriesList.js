import Image from 'next/image';
// Image component from next.js with Automatic Image Optimization
// Avoid shipping large images to small viewport

import useStories from '../hooks/useStories';

const StoriesList = () => {
  const { data, isLoading, isError } = useStories();

  if (isLoading) return <div>Loading ...</div>;

  return (
    <section>
      {data.results.map((story) => (
        <article
          key={story.short_url}
          className={
            story.short_url === data.results[0].short_url ? 'headline' : 'story'
          }>
          <div>
            {story.multimedia && (
              <Image
                src={story.multimedia[0].url}
                alt={story.multimedia[0].caption}
                width={500}
                height={333}
              />
            )}
          </div>
          <div>
            <p className="story__section">{story.section}</p>
            <h2>{story.title}</h2>
            <p className="story__byline">{story.byline}</p>
            <p className="story__abstract">
              {story.abstract}{' '}
              <a
                className="story__link"
                href={story.url}
                target="_blank"
                rel="noopener noreferrer">
                Read more
              </a>
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default StoriesList;
