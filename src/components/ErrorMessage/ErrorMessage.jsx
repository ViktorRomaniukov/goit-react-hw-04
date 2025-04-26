import styles from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <p>{message || 'Something went wrong. Please try again later.'}</p>
    </div>
  );
}