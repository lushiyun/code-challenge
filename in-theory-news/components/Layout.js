import React, { useState } from 'react';
//for modifying the <head> - SEO
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  //search input open
  const [open, setOpen] = useState(false);
  //search query term
  const [term, setTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      //shallow routing
      router.push(`/search/${term}`);
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
          className={open ? 'search__input' : 'hidden'}
          type="text"
          placeholder="search..."

          //controlled form
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={(e) => setOpen(!open)} className="search__btn">
          {open ? <IoMdClose size={18} /> : <FaSearch size={18} />}
        </button>
      </div>
    </>
  );
};

export default Layout;
