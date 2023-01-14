const useModal = () => {
  const Modal = ({ children }) => {
    console.log(children)
    return <>{children}</>;
  };

  return { Modal };
};

export default useModal;
