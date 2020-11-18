import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <a>
        <img src="/in-theory.svg" alt="In Theory Logo" className="logo" />
      </a>
    </Link>
    <p className="logo__byline">your simplest science news feed.</p>
  </header>
);

export default Header;
