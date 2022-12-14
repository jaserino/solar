import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOLAR STUDY</title>
      </Head>
      <div className={styles.main}>
        <h1 className={styles.h1}>Welcome to Solar</h1>
        <p className={styles.mainp}>
          Engage your brain with Solar. Making study time out of this world
        </p>
        <div className={styles.btnhero}>
          <Link href="/login">
            <button className={styles.btnsignin}>login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.btnsignup}>sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
