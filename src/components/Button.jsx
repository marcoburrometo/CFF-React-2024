import { useState } from "react";
import "./Button.sass";

function Button(props) {
  const classe = `button color-${props.color} variant-${props.variant}`;

  const [contatore, setContatore] = useState(0);
  const [hover, setHover] = useState(false);

  function onClick() {
    setContatore(contatore + 1);
    // alert("hai cliccato il bottone " + props.color + "!");
  }

  return (
    <button
      className={classe}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.text} {props.subtitle} <br />
      questo bottone sarà di colore {props.color}
      <br />
      Hai cliccato {contatore} volte{" "}
      {contatore === 1 ? "sola volta" : "tante volte"}
      <br />
      {hover ? "Hai il mouse sopra" : "Non hai il mouse sopra"}
    </button>
  );
}

export default Button;
