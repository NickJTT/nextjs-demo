import Layout from '../components/layout';
import '../styles.scss';

export default function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps}/>
  </Layout>;
}
