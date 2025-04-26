import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.item}>
         <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}