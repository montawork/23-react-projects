import React from 'react';
import { FaTimes } from 'react-icons/fa';
// import { MainContext } from './context';
import { useCustomContext } from './context';

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useCustomContext();

  return (
    <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          className="close-modal-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
