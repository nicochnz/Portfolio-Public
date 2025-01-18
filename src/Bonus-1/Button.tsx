import { useEffect, useRef, useState } from "react";
import "./Button.css";
import React from "react";

export default function TwoButtons() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [button2Color, setButton2Color] = useState<string>("#007bff");

  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

  const moveButtonRandomly = (button: HTMLButtonElement | null) => {
    if (!button) return;

    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    const randomX = Math.max(0, Math.random() * maxWidth);
    const randomY = Math.max(0, Math.random() * maxHeight);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  const ensureButtonInBounds = (button: HTMLButtonElement | null) => {
    if (!button) return;

    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    const currentLeft = Number.parseFloat(button.style.left || "0");
    const currentTop = Number.parseFloat(button.style.top || "0");

    button.style.left = `${Math.min(maxWidth, Math.max(0, currentLeft))}px`;
    button.style.top = `${Math.min(maxHeight, Math.max(0, currentTop))}px`;
  };

  const handleMouseOverButton1 = () => {
    moveButtonRandomly(button1Ref.current);
    ensureButtonInBounds(button1Ref.current);
  };

  const handleClickButton1 = () => {
    setCount1((prevCount) => prevCount + 1);
    moveButtonRandomly(button1Ref.current);
  };

  const handleClickButton2 = () => {
    setCount2((prevCount) => prevCount + 1);

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    setButton2Color(randomColor);

    moveButtonRandomly(button2Ref.current);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handleResize = () => {
      ensureButtonInBounds(button1Ref.current);
      ensureButtonInBounds(button2Ref.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section">
      {/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
      <button
        ref={button1Ref}
        className="RandomButton"
        type="button"
        onMouseOver={handleMouseOverButton1}
        onClick={handleClickButton1}
        aria-label={`Bouton fuyant cliqué ${count1} fois`}
      >
        You caught me : {count1} times !
      </button>

      <button
        ref={button2Ref}
        className="MovableButton"
        type="button"
        onClick={handleClickButton2}
        style={{ backgroundColor: button2Color }}
        aria-label={`Bouton mobile cliqué ${count2} fois`}
      >
        You clicked me : {count2} times !
      </button>
    </div>
  );
}
