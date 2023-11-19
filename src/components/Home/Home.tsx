import styles from './Home.module.scss';

const exampleImg1 = process.env.PUBLIC_URL + '/bob.webp';
const exampleImg2 = process.env.PUBLIC_URL + '/patrick.webp';

interface IHomeProps {
}

export function Home({}: IHomeProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Welcome to the Imaginary Friends!</h2>
      <div className={styles.inner}>
        <img src={exampleImg1} alt="friend example 1" className={styles.img1} />
        <p className={styles.description1}>Here you can...</p>
        <img src={exampleImg2} alt="friend example 2" className={styles.img2} />
        <p className={styles.description2}>...collect and store</p>
        <p className={styles.description3}>Your imaginary friends</p>
      </div>
    </div>
  );
}