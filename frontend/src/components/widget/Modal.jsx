import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "none",
  },
};

const PopModal = ({ isModalOpen, setIsModalOpen, Body }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Body />
      </Modal>
    </div>
  );
};

export default PopModal;
