import styles from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  const { alt_description, urls } = image;

  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        src={urls.small}
        alt={alt_description}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
}