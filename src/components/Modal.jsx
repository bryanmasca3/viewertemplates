"use client";
import React, { useState } from "react";
import Modal from "react-modal";
/* Modal.setAppElement('#__next');  */
const ModalTemplate = ({ isOpen, closeModal, children }) => {
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          ariaHideApp={false}
          className="Modal"
          overlayClassName="Overlay"
        >
          {children}
        </Modal>
      )}
    </>
  );
};

export default ModalTemplate;
