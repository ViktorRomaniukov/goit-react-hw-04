import styles from './LoadMoreBtn.module.css';

export function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}