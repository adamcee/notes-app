
import Note from './Note';


function NotesList(props) {
  const notesData = props.notesData;

  const notesElements = [];

  for(let i = 0; i < notesData.length; i++) {
    const note = notesData[i];

    notesElements.push(
      <Note title={note.title} message={note.message} />
    )
  }

  return (
    <div>
      {notesElements}
    </div>
  );
}

export default NotesList;
