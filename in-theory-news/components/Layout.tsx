import React, { useState } from 'react';
//for modifying the <head> - SEO
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({children}) => {
  const router = useRouter();
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [queryTerm, setQueryTerm] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      //shallow routing
      router.push(`/search/${queryTerm}`);
    }
  };

  return (
    <>
      <Head>
        <title>In Theory News</title>
        <meta
          name="description"
          content="Simplest news source for your scientific explorations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />

      <div className="search-box">
        <input
          //toggle visibility
          className={searchInputOpen ? 'search__input' : 'hidden'}
          type="text"
          placeholder="search..."
          //controlled form
          value={queryTerm}
          onChange={(e) => setQueryTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={(e) => setSearchInputOpen(!open)} className="search__btn">
          {searchInputOpen ? <IoMdClose size={18} /> : <FaSearch size={18} />}
        </button>
      </div>
    </>
  );
};

export default Layout;
