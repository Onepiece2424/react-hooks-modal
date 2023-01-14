import './App.css';
import WelcomeDialog from './components/WelcomeDialog';
import useModal from './hooks/useModal';

function App() {

  const { Modal } = useModal();

  return (
    <div className="App">
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <Modal>
        <h2>Content from children</h2>
      </Modal>
      <WelcomeDialog />
    </div>
  );
}

export default App;
