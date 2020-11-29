//with Automatic Image Optimization
//avoid shipping large images
import Image from 'next/image';
import Link from 'next/link';
import { Result } from '../models/data';

const Story = ({ story }: { story: Result }) => {

  return (
    <>
      <div className="story__image">
        {/* some results don't include multimedia property */}
        {story.multimedia ? (
          <Image
            src={story.multimedia[0].url}
            alt={story.multimedia[0].caption}
            //width height ratio based on standardized "superJumbo" size
            width={750}
            height={500}
          />
        ) : (
          // if no multimedia, serve logo
          <img src="/in-theory.png" alt="In Theory Logo" className="logo" />
        )}
      </div>

      <div className="story__text">
        <p className="story__section">
          <Link href={`/${story.section}`}>
            <a>{story.section}</a>
          </Link>
        </p>

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
    </>
  );
};

export default Story;
