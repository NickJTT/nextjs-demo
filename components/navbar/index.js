import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Navbar() {
  return <nav className = {styles.navbar}>
    <div>
      <Image src='/logo.png' width={128} height={64}/>
    </div>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/students'>Student Listing</Link>
  </nav>;
}
