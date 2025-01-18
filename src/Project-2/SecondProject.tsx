import "./SecondProject.css";
import React from "react";
export default function SecondProject() {
  return (
    <div className="section project-2">
      <h2>
        Memory <span>Card</span> Game
      </h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ciQKhZ8PEko?si=Ebp9fwqPmDcJ3eas"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p>Second project</p>
      <p className="description">
        <h3>Project Description :</h3>
        Development of a memory game themed around Super Smash Bros, completed
        in one month using CSS, React, TypeScript, and Express.
        <h3>Skills Developed:</h3>
        This project allowed me to enhance my skills in React, master API data
        fetching, efficiently organize my code, and collaborate within a team. I
        also learned to use npm packages and implement React Router.
      </p>
      <p>
        <span>CSS</span>
        <span>Typescript</span>
        <span>React</span>
        <span>Express</span>
      </p>
    </div>
  );
}
