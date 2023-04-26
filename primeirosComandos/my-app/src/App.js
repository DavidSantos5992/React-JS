import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('')
  const[tarefa, setTarefa] = useState([])

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');
    alert('ooi')
    if (tarefasStorage) {
      setTarefa(JSON.parse(tarefasStorage))
    }
    
  }, [])

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefa))
  }, [tarefa]);
  /* armazenando array tarefa em forma de string dentro do localStorege */

  /* se o aray estiver vazio sempre que o componente app for chamado a função useEffect sera chamanda,
     caso o array do useEffect estiver preenchido, sempre que o paramentro dentro do array for alterado a função useEffect sera chamada novamente*/

  function handleRegister(e) {
    e.preventDefault();
    
    setTarefa([...tarefa, input])
    setInput('')

  }

  return (
    <div>
      <form onSubmit={handleRegister}>

        <label>Nome:</label><br/>
        <input type="text" placeholder="Digite sua tarefa"
         value={input}
         onChange={(e) => setInput(e.target.value) }
         />

         <br/>
         <br/>

        <button type="submit">Registrar</button>

      </form>
      <br /><br />
      <ul>
        {/* map percorre todo o array e constroi um novo */}
        {tarefa.map( tarefa => (
          <li key={tarefa}>
              {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


