import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  function alCambio(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={alCambio} />
      <p>
        hai scrtto {value}, in maiuscolo è {value.toUpperCase()}
      </p>
    </div>
  );
}

export default Input;
