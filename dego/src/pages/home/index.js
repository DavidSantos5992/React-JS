import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        < div >

         <h1>home</h1>    
         <Link to='./Sobre'>ir para sobre</Link>
        </div >
    );
}

export default Home;
