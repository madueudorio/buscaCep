import React from "react";

import { 
BrowserRouter,
Route,
Routes

} from "react-router-dom";
import BuscaCep from "../components/BuscaCepForm";
import Cadastro from "../components/Cadastro";
import Listagem from "../components/Listagem";
import Editar from "../components/Editar";

const AppRouter = () => {
    return (
       <BrowserRouter>
          <Routes>
             <Route path="buscaCep" element ={<BuscaCep />} />

            <Route path="cadastro" element ={<Cadastro />} />

            <Route path="listagem" element ={<Listagem />} />

            <Route path="/editarcliente/:id" element ={<Editar />} />

            <Route path="/editarservico/:id" element ={<Editar />} />

            <Route path="/editarprofissional/:id" element ={<Editar />} />

          </Routes>
       </BrowserRouter>
    );
}

export default AppRouter;