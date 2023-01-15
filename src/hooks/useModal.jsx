// カスタムフック
import { useState } from  'react';

const useModal = () => {

  // モーダルを表示・非表示にするためのstate
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const Modal = ({ children }) => {
    if (!show) return null;
    return (
      <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'gray',
          opacity: '0.5',
        }}
      ></div>
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
