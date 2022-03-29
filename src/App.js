import "./styles.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import TrainerForm from "./components/TrainerForm";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PruebaRutaProtegida from "./components/PruebaRutaProtegida";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TrainerForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
