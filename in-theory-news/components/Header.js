import Link from 'next/link';
import { useRouter } from 'next/router';
import useStories from '../hooks/useStories';

const Header = () => {
  //data served from cache; only one http fetch call
  const { data, isLoading, isError } = useStories();
  const router = useRouter();

  //render unique section names per fetch result
  const renderedSections = (data) => {
    const sectionsSet = new Set(data.results.map((story) => story.section));

    return [...sectionsSet].map((section) => (
      <li key={section}>
        {/* dynamic routing */}
        <Link href={`/${section}`}>
          <a
            // conditional styling - active link orange
            className={section === router.query.section ? 'nav__active' : null}>
            {section}
          </a>
        </Link>
      </li>
    ));
  };

  return (
    <header>
      <Link href="/">
        <a>
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
