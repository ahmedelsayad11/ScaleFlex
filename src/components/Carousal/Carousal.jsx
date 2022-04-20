import React from "react";
import styles from "./Carousal.module.scss";
const Carousal = ({
  data,
  currentSlide,
  handleNextClick,
  handlePreviousClick,
}) => {
  const ratioBetweenCurrentImageAndTotalImages = `${currentSlide + 1}/${
    data?.length
  }`;
  const firstImage = currentSlide === 0;
  const lastImage = currentSlide === data?.length - 1;
  return (
    <div>
      <div className={styles["carousal-container"]}>
        <d iv className={styles["image-container"]}>
          <img src={data[currentSlide]?.url} alt="" />
        </d>
        <p> {data[currentSlide]?.name} </p>
        <button
          disabled={lastImage}
          onClick={handleNextClick}
          className={styles["next-button"]}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.713 12L9.70202 5.99001L8.28802 7.40401L12.888 12.004L8.28802 16.597L9.70202 18.011L15.713 12Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          disabled={firstImage}
          onClick={handlePreviousClick}
          className={styles["previous-button"]}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.28802 12L14.298 18.01L15.712 16.596L11.112 11.996L15.712 7.39601L14.298 5.99001L8.28802 12Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span>{ratioBetweenCurrentImageAndTotalImages}</span>
      </div>
    </div>
  );
};

export default Carousal;
