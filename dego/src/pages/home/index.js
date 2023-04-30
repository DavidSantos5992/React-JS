import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        < div >

         <h1>home</h1>    
         <Link to='./Sobre'>ir para sobre</Link>

         <hr /><br />
          <Link to='/produto/123'>acessar produto 123</Link>
        </div >
    );
}

export default Home;
