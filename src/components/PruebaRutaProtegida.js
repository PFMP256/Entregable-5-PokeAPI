import React from "react";
import { useSelector } from "react-redux";

export default function PruebaRutaProtegida() {
  const name = useSelector((state) => state.name);

  return <div> hola {name} </div>;
}
