import Favoritos from "./Pages/Favoritos";
import Inicio from "./Pages/Inicio";
import NotFound from "./Pages/NotFound";
import PaginaBase from "./Pages/PaginaBase";
import Player from "./Pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;