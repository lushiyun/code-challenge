import Layout from '../components/Layout';
import StoriesList from '../components/StoriesList';

export default function Home() {
  return (
    // While this app doesn't have multiple pages
    // used the layout structure for future scaling
    <Layout>
      <StoriesList />
    </Layout>
  );
}
