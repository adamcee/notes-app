
function Note(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.message}</p>
    </div>
  );
}

export default Note;