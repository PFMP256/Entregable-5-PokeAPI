import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TrainerForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_NAME", payload: name });
    navigate("/pokedex");
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-8 d-block justify-content-center pokemon-trainer">
          <div className="d-flex justify-content-center">
            <span className="h1 fw-bold">Hello Trainer!</span>
            <img
              src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"
              alt=""
              width="120px"
              height="251px"
            />
          </div>
          <div className="lets-start">
            <span className="h3">Give me your name to start</span>
            <form onSubmit={submit} className="send">
              <input
                className="input-trainer"
                type="text"
                name=""
                id=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <a href="./pokemons.html">
                <button className="button-trainer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
