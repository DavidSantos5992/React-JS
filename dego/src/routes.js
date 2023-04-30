import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Sobre from './pages/sobre'
import Contato from "./pages/contato";
import Error from './pages/Error';
import Produto from './pages/produto'


import Header from "./components/Header";

function RouterApp() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path='/produto/:id' element={<Produto />} />



                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouterApp