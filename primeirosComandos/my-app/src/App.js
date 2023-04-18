import { useState } from "react";
import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Sujeito programador')

  function handChangeName(nome) {
    setAluno(nome)
  }

  return (
    <div>
      <h1>Component App</h1>
      <h2>ola: {aluno}</h2>

      <button onClick={ () => handChangeName('David') }>
        MUDAR NOME
      </button>
    </div>
  );
}

export default App;


