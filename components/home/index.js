import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Home() {
  return <div className={styles.home}>
    <Head>
      <title>Students List | Home</title>
    </Head>
    <h1>Homepage</h1>
    <Link href='students'>
      <a>See Students Listing</a>
    </Link>
  </div>;
}
