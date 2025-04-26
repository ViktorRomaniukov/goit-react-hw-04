import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color="#007bff" />
    </div>
  );
}