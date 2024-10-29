import styles from './Home.module.scss';
import exampleImg1 from '../../assets/images/bob.webp';
import exampleImg2 from '../../assets/images/patrik.webp';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Welcome to The&nbsp;Imaginary&nbsp;Friends!</h2>
      <div className={styles.inner}>
        <img src={exampleImg1} alt="friend example 1" className={styles.img1} />
        <p className={styles.description1}>Here you can make&nbsp;up...</p>
        <img src={exampleImg2} alt="friend example 2" className={styles.img2} />
        <p className={styles.description2}>...collect and&nbsp;store</p>
        <p className={styles.description3}>Your imaginary friends</p>
      </div>
    </div>
  );
}