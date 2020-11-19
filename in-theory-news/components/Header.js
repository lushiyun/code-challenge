import Link from 'next/link';
import useStories from '../hooks/useStories';

const Header = () => {
  // Custom hook useStories() is built with swr
  // While the StoriesList component also uses this hook
  // Data in one of the components is served from cache
  // So there is only one http fetch call
  const { data, isLoading, isError } = useStories();

  // dynamically render a list of unique section names based on API call result
  const renderedSections = (data) => {
    const sectionsSet = new Set(data.results.map((story) => story.section));
    return [...sectionsSet].map((section) => <li key={section}>{section}</li>);
  };

  if (isLoading) return <div>loading ...</div>;

  return (
    <header>
      <Link href="/">
        <a>
          <img src="/in-theory.svg" alt="In Theory Logo" className="logo" />
        </a>
      </Link>
      <ul className="nav">{data && renderedSections(data)}</ul>
    </header>
  );
};

export default Header;
