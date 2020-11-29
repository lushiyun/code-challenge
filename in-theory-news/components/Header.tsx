import Link from 'next/link';
import { useRouter } from 'next/router';

import useStories, { Data } from '../hooks/useStories';

const Header: React.FC = () => {
  //data served from cache; only one http fetch call
  const { data, isLoading, isError } = useStories();
  const router = useRouter();

  //render unique section names per fetch result
  const renderedSections = (data: Data) => {
    const sectionsSet = new Set(data.results.map((story) => story.section));

    return [...sectionsSet].map((section) => (
      <li key={section}>
        <Link href={`/${section}`}>
          <a
            // conditional styling - active link orange
            className={
              section === router.query.section ? 'nav__active' : 'nav__inactive'
            }>
            {section}
          </a>
        </Link>
      </li>
    ));
  };

  return (
    <header>
      <Link href="/">
        <a aria-label="Home">
          <img src="/in-theory.png" alt="In Theory Logo" className="logo" />
        </a>
      </Link>
      {isLoading ? null : (
        <ul className="nav">{data && renderedSections(data)}</ul>
      )}
    </header>
  );
};

export default Header;
