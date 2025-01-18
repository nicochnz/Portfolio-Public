import "./FirstProject.css";
import React from "react";
export default function FirstProject() {
  return (
    <div className="section project-1">
      <h2>Bordeaux Quizz</h2>
      <img src="src/assets/Projet1(1).png" alt="img1" />
      <img src="src/assets/Projet1(2).png" alt="img2" />
      <p>First project</p>
      <p className="description">
        <h3>Project Description :</h3>
        Development of an interactive quiz about Bordeaux with two difficulty
        levels (easy and hard). This two-week project was built using HTML, CSS,
        and JavaScript.
        <h3>Skills Developed:</h3>
        This project allowed me to strengthen my JavaScript fundamentals,
        improve code organization, efficiently manipulate the DOM, and enhance
        my project management skills within a set timeframe.
      </p>
      <a rel="noreferrer" target="_blank" href="https://bdxquizz.netlify.app/">
        Discover-it
      </a>
      <p>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
      </p>
    </div>
  );
}
