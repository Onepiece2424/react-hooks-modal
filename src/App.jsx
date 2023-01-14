import './App.css';
import useModal from './hooks/useModal';

function App() {
  const { Modal } = useModal();
  return (
    <div className="App">
      <h1>React Hooksでモーダルウィンドウを作成</h1>
      <Modal />
    </div>
  );
}

export default App;
