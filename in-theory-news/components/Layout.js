// Next's built-in Head component for modifying the <head> of a page
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>In Theory News</title>
      <meta
        name="description"
        content="Simplest news source for your scientific explorations"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* inline styles for sticky footer */}
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
