import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import PokemonInfo from "./PokemonInfo";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

export default function Pokedex() {
  const name = useSelector((state) => state.name);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemonSearched, setPokemonSearched] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const navigate = useNavigate();
  const search = () => navigate(`/pokedex/${pokemonSearched}`);

  // document.body.style.backgroundColor={"yelllow"}
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filterPokemons = (url) => {
    axios
      .get(url)
      .then((res) => setPokemons(res.data.pokemon))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setPage(1);
  }, [pokemons]);
  const max = pokemons?.length / perPage;
  return (
    <div className="pokedex-container">
      <span className="h1 fw-bold">Pokedex</span>
      <p className="name-trainer">
        Welcome {name}, here you can find your favorite pokemon
      </p>
      <div className="lets-start">
        <form className="send">
          <input
            className="input-trainer"
            type="text"
            value={pokemonSearched}
            onChange={(e) => setPokemonSearched(e.target.value)}
          />
          <a href="./pokemons.html">
            <button onClick={search} className="button-search">
              <i className="fas fa-search"></i>
            </button>
          </a>
        </form>
      </div>
      <div className="lets-start">
        <select
          className="input-trainer"
          onChange={(e) => filterPokemons(e.target.value)}
        >
          {types.map((type) => (
            <option key={type.name} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="pokemons-container">
        {/* 

pokemons.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map(pokemon, i) => ()

*/}
        {pokemons
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((pokemon) => (
            <PokemonInfo
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} max={max} />
    </div>
  );
}
