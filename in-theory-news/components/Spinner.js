import styles from '../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
