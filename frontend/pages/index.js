import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOLAR STUDY</title>
      </Head>
      <div className={styles.main}>
        <h1>Welcome to Solar</h1>
        <p className={styles.mainp}>
          Engage your brain with Solar. Making study time out of this world
        </p>
        <div className={styles.btnhero}>
          <button className={styles.btnsignup}>sign up</button>
          <button className={styles.btnsignin}>sign in</button>
        </div>
      </div>
    </div>
  );
}
