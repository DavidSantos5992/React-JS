import { useState } from "react";

function App() {
  const [input, setInput] = useState('')
  const[tarefa, setTarefa] = useState([])

  function handleRegister(e) {
    e.preventDefault();
    
    setTarefa([...tarefa, input])
    setInput('')

    /* ...tarefa pega todo o array */
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
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


