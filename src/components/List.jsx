import { useState } from "react";

function List() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  function aggiungi() {
    setList([...list, list.length + 1]);
  }

  function resetta() {
    setList([]);
  }

  return (
    <div>
      <ul>
        {list.map((val) => (
          <li>ciao {val}</li>
        ))}
      </ul>
      <button onClick={aggiungi}>Aggiungi</button>
      <button onClick={resetta}>Resetta</button>
    </div>
  );
}

export default List;
