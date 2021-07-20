import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function FourOhFour() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push('/');
    }, 4000);
  }, []);

  return <div className = {styles.fourOhFour}>
    <h1>Oooops</h1>
    <h2>That page could not be found</h2>
    <p>Go back to the <Link href='/'>Homepage</Link></p>
  </div>;
}
