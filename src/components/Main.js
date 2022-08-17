import React from "react";
import imagem from "../img/photo.jpg";
import MainStyle from "./MainStyle.js";

export default function Main(props) {
    return (
      <MainStyle>
        <img src={imagem}></img>
        <h2>{props.name}</h2>
        <h2>Tenho {props.old} anos!</h2>
        <h2>Estou estudando {props.study}</h2>
      </MainStyle>
    );
  }