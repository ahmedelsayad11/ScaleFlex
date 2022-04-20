import classNames from "classnames";
import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({
  children,
  showModal = false,
  handleCloseButtonModalClick = () => true,
}) => {
  const modalClasses = classNames({
    [styles["show-modal"]]: showModal,
  });

  return (
    <div id="myNav" className={`${styles["overlay"]}  ${modalClasses} `}>
      <button
        className={styles["close-button"]}
        onClick={handleCloseButtonModalClick}
      >
        &times;
      </button>
      <div className={styles["overlay-content"]}>{children}</div>
    </div>
  );
};

export default Modal;
