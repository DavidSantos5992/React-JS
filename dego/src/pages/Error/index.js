import { Link } from "react-router-dom"

function Error() {
    return (
        <div>
            <h1>ops acho que esta pagina não existe</h1><br />
            <h1>Encontrei as seguintes pagínas</h1>

            <Link to="/">Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>

        </div>
    )

}

export default Error