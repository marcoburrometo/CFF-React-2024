function ListElement(props) {
  return (
    <li>
      {props.text}
      <button onClick={() => props.onDelete("ciao")}>X</button>
    </li>
  );
}

export default ListElement;
