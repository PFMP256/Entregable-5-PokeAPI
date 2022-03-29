import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PokemonInfo({ url }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  return (
    <Link to={`/pokedex/${pokemon.id}`}>
      <div className="pokemon-card bg-dark">
        <span className="h5">{pokemon.name}</span>
        <div className="pokemon-direction">
          <div className="pokemon-b">
            <div>
              <div className="pokemon-stadistics">
                <b>Types:</b>
                {pokemon.types?.map((type, idx) => {
                  return (
                    <span key={idx} className="pokemon-type-text">
                      {type.type.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="pokemon-stadistics">
                <b>Hp:</b> {pokemon?.stats?.[0].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-stadistics">
                <b>Attack:</b> {pokemon?.stats?.[1].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-stadistics">
                <b>Defense:</b> {pokemon?.stats?.[2].base_stat}
              </div>
            </div>
            <div>
              <div className="pokemon-stadistics">
                <b>Speed:</b> {pokemon?.stats?.[5].base_stat}
              </div>
            </div>
          </div>
          <div className="img-pokemon">
            <img src={pokemon.sprites?.front_default} alt="" width="84" />
          </div>
        </div>
      </div>
    </Link>
  );
}
