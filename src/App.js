import './App.css';
import Title from './Title';
import Note from './Note';


function App() {
  const notesData = [
    {
      title: "Note #1",
      message: "This is my 1st note!",
    },
    {
      title: "Note #2",
      message: "This is my 2nd note!",
    },
    {
      title: "Note #3",
      message: "This is my 3rd note!",
    },
    {
      title: "Note #4",
      message: "This is my 4th note!",
    },
  ];

  const notesElements = [];

  for(let i = 0; i < notesData.length; i++) {
    const note = notesData[i];

    notesElements.push(
      <Note title={note.title} message={note.message} />
    )
  }

  // TODO: Pass subheading as prop to title
  return (
    <div className="App">
      <header className="App-header">
        <Title 
          title="My Notes"
          subHeading="This is my first react app"
        />
        <div>
          <Note 
            message="This is a note" 
            title="Note"
          />
          {notesElements}
        </div>
      </header>
    </div>
  );
}

export default App;
