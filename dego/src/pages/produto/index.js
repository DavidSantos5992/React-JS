import { useParams } from "react-router-dom"

function Produto() {
    
    const{ id } = useParams();

    return(
        <div>
            <h1>Detalhes do produto</h1>

            este é o produto {id}
        </div>
    )
}

export default Produto