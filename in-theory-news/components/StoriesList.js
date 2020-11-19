import Image from 'next/image';
// Image component from next.js with Automatic Image Optimization
// Avoid shipping large images to small viewport

import useStories from '../hooks/useStories';

const StoriesList = () => {
  // data is fetched with swr
  // although this hook is also used in header nav component
  // there is no duplicate http fetch call, due to cache
  const { data, isLoading, isError } = useStories();

  if (isLoading) return <div>Loading ...</div>;

  return (
    <section className="stories">
      {data.results.map((story) => (
        <article

        // API doesn't provide an ID property
        // short_url serves as unique key
          key={story.short_url}
          className={
            // conditionally apply headline class to the first story in the list
            story.short_url === data.results[0].short_url ? 'headline' : 'story'
          }>
          <div className="story__image">
            {story.multimedia && (
              <Image
                src={story.multimedia[0].url}
                alt={story.multimedia[0].caption}

                // width and height are required for automatic image optimization
                // ratio is based on the standardized "superJumbo" size
                width={750}
                height={500}
              />
            )}
          </div>
          <div className="story__text">
            <p className="story__section">{story.section}</p>
            <h2 className="story__title">{story.title}</h2>
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
