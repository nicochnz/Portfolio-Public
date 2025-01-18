import React from "react";
import "./HomeSection.css";
export default function HomeSection() {
  return (
    <div className="section home">
      <h1>Chiche Nicolas</h1>
      <img className="ProfilPicture" src="images/Nico.png" alt="PhotoProfil" />
      <p className="presentation">Hi, I'm a french developer.</p>
      <p>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>Typescript</span>
        <span>React</span>
        <span>Express</span>
        <span>Mysql</span>
        <span>NodeJs</span>
      </p>
      <p className="informations">
        You can contact me <a href="#form">here</a>.
      </p>
    </div>
  );
}
