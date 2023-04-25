import { useState } from "react";

function App() {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[idade, setIdade] = useState('')

  /* apenas para exibir */
  const[user, setUser] = useState({})
  /* ------- */

  function handleRegister(e) {
    e.preventDefault();
    
    alert('Registrado com sucesso!')
    setUser({
      nome: nome,
      email: email,
      idade: idade
    })

  }

  return (
    <div>
      <form onSubmit={handleRegister}>

        <label>Nome:</label><br/>
        <input type="text" placeholder="Digite seu nome"
         value={nome}
         onChange={(e) => setNome(e.target.value) }
         />
         <br/><br/>

        <label>Email:</label><br/>
        <input type="email" placeholder="Digite seu email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>
         <br /><br />

        <label>Idade:</label><br/>
        <input type="number" placeholder="Digite sua idade" 
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        />

        <br /><br />

        <button type="submit">Registrar</button>

      </form>
      <br /><br />
      <div>
        <span>Bem Vindo: {user.nome}</span><br /><br />

        <span>Idade: {user.idade} </span><br /><br />

        <span>Email: {user.email}</span><br /><br />

      </div>
    </div>
  );
}

export default App;