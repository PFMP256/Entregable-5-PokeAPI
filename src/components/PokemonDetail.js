import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pokemon.css";
import { useNavigate } from "react-router-dom";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const ret = () => navigate(`/pokedex`);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="pokemon-specs1">
      <button onClick={ret}>Return</button>

      <img
        width="20%"
        className="pokemon-header1"
        src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
        alt=""
      />
      <div className="pokemon-stats1">
        <div className="pokemon-img1">
          <img
            width="20%"
            height="auto"
            src={pokemon.sprites?.front_default}
            alt=""
          />
        </div>
        <div className="pokemon-w-h1">
          <div>
            <span className="h2">{pokemon.weight}</span>
            <span className="fw-light">Weight</span>
          </div>
          <div>
            <span className="h2">{pokemon.height}</span>
            <span className="fw-light">Height</span>
          </div>
        </div>
        <div className="pokemon-name-n1">
          <span className="pokemon-name1 h2">{pokemon.name}</span>
          <div className="pokemon-n1"># {pokemon.id}</div>
        </div>
      </div>
      <div className="pokemon-movements1">
        <div>
          <span className="h1">Movements</span>
        </div>

        {pokemon.moves?.map((move, idx) => {
          return (
            <div key={idx}>
              <span>{move.move.name}</span>
            </div>
          );
        })}
      </div>
      <div className="pokemon-type1">
        <span className="h2">Type</span>
        <div className="pokemon-t-a1">
          {pokemon.types?.map((type, idx) => {
            return (
              <div key={idx}>
                <span className="h5">{type.type.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pokemon-abilities1">
        <span className="h2">Abilities</span>
        <div className="pokemon-t-a1">
          {pokemon.abilities?.map((ability, idx) => {
            return (
              <div key={idx}>
                <span className="h5">{ability.ability.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
