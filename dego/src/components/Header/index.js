import { Link } from "react-router-dom"
import './style.css'

function Header() {
    return(
        <header>
            <h2>header teste</h2>

                <Link to="/">Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
        </header>

        
    )
    
}



export default Header