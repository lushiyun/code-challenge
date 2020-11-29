import styles from '../styles/Spinner.module.css';

const Spinner: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
