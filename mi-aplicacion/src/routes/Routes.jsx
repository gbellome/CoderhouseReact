import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from '../views/Inicio'
import Ofertas from '../views/Ofertas'
import Combos from '../views/Combos'
import Cajas from '../views/Cajas'
import Favoritos from '../views/Favoritos'
import PorPais from '../views/PorPais'
import Error from '../views/Error'
import Layout from "../Layout/Layout"

const routes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="/Ofertas" element={<Ofertas />} />
                        <Route path="/Combos" element={<Combos />} />
                        <Route path="/Cajas" element={<Cajas />} />
                        <Route path="/Favoritos" element={<Favoritos />} />
                        <Route path="/PorPais" element={<PorPais />} />
                        <Route path="/*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default routes