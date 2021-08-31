import './App.css';
import Title from './Title';
import NotesList from './NotesList';


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <Title 
          title="My Notes"
          subHeading="This is my first react app"
        />
        <NotesList notesData={props.notesData} />
      </header>
    </div>
  );
}

export default App;
