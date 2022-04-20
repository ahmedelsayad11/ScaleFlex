import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = ({ data = [], handleGalleryImageClick = () => true }) => {
  return (
    <div className={styles["gallery"]}>
      {data?.map((image, index) => (
        <div className={styles["image-container"]}>
          <img
            onClick={handleGalleryImageClick}
            id={index}
            key={image?.uuid}
            src={image?.url}
            alt={image?.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
