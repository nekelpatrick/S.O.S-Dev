import './App.css';
import Pages from './Pages';
import Botão from "./Components/Atoms/Button";

function App() {
  return (
    <>
      <Pages />
      <Botão entrar/>
      <Botão sair/>
    </>
  );
}

export default App;
