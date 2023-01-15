import './App.css';
// import WelcomeDialog from './components/WelcomeDialog';
import useModal from './hooks/useModal';

function App() {

  const { Modal, openModal, closeModal, show } = useModal();

  return (
    <div className="App">
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <div>
        <button onClick={openModal}>Open</button>
      </div>
      <Modal show={show}>
        <div
          style={{
            backgroundColor: 'white',
            width: '300px',
            height: '200px',
            padding: '1em',
            borderRadius: '15px',
          }}
        >
          <h2>Content from Children</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
      <div style={{ height: '2000px', backgroundColor: '#ddd' }}>
        メインコンテンツ
      </div>
      {/* <WelcomeDialog /> */}
    </div>
  );
}

export default App;
