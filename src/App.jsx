import './App.css';
// import WelcomeDialog from './components/WelcomeDialog';
import useModal from './hooks/useModal';

function App() {

  const { Modal, openModal, closeModal } = useModal();

  return (
    <div className="App">
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <div>
        <button onClick={openModal}>Open</button>
      </div>
      <Modal>
        <h2>Content from children</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
      {/* <WelcomeDialog /> */}
    </div>
  );
}

export default App;
