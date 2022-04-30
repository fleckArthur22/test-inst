import React from "react";
import styles from "./Modal.module.css";

function Modal({ darkModal, setDarkModal, lightModal, setLightModal }) {
  return (
    <>
      {darkModal && (
        <div
          className={styles.darkModal}
          onClick={() => setDarkModal((darkModal = false))}
        >
          <div className={styles.box}>
            <div className={styles.boxUst}>Yeni gönderi oluştur</div>
            <p>Fotoğraf ve videoları buraya sürükle</p>
            <button>Bilgisayardan seç</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
