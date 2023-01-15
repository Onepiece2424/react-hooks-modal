// カスタムフック
import { useState, useEffect, useRef } from  'react';
import { createPortal } from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const useModal = () => {

  // モーダルを表示・非表示にするためのstate
  const [show, setShow] = useState(false);

  // モーダルを開く
  const openModal = () => {
    setShow(true);
  };

  // モーダルを閉じる
  const closeModal = () => {
    setShow(false);
  };

  const Modal = ({ children, show }) => {

    // モーダルのDOMを取得
    const contentRef = useRef(null);

    // モーダル表示時に背景のスクロールを制御
    useEffect(() => {
      if (contentRef.current === null) return;

      if (show) {
        disableBodyScroll(contentRef.current, {
          reserveScrollBarGap: true,
        });
      } else {
        enableBodyScroll(contentRef.current);
      }

      return () => {
        clearAllBodyScrollLocks();
      };
    }, [show, contentRef])

    // デフォルト時にはモーダルを非表示にする
    if (!show) return null;

    return createPortal(
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
      <div style={{ position: 'relative' }} ref={contentRef}>{children}</div>
    </div>,
    document.getElementById('root')
    );
  };

  return { Modal, openModal, closeModal, show };
};

export default useModal;
