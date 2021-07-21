import React from "react";
import "./Welcome.css";

// export const Welcome = () => {
export default function Welcome  ()  { 
  return (
    <div className="welcome">
      <h1  className="text-light " >Bienvenidos a Radarin</h1>
      <p  className="text-light " >En esta aplicacion podras localizar a tus amigos cercanos</p>
    </div>
  );
}