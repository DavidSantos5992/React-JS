import React, { useEffect, useState } from "react";
import './style.css';
/* api */
/* https://sujeitoprogramador.com/rn-api/?api=posts */


function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      //utilizando api
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json)
          setNutri(json)
        })

    }

    loadApi();
  }, [])

  return (
    <div className="Container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <div className="container">
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>

              <img src={item.capa} alt={item.titulo} />

              <p className="subtitulo">
                {item.subtitulo}
              </p>

              <a className="botao" href="1">acessar</a>
            </article>

          </div>

        )
      })}

    </div>
  );
}

export default App;
