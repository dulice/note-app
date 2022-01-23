import React, {useState} from "react";
import Heading from "./components/heading";
import WriteNote from "./components/writeNote";
import NoteList from "./components/noteList";


function App() {

  const [addNote, setAddNote] = useState([]);
    const [load, setLoad] = useState(true);

    function handleAddNote(writeNote) {
        setAddNote([...addNote, writeNote])
    }

    function handleDelete(id) {
        const deleteNote = addNote.filter((note, index) => id !== index);
        return setAddNote(deleteNote);   
    }

    function clickNote() {
        setLoad(false);
    }

  return (
    <div className="App">
      <div className="note-container">
        <Heading/>
      {load?
        <textarea onClick={clickNote}
          style={{width: "80%", margin: " 20px auto"}}
          name="content" placeholder="Take a note..."></textarea> :
        <WriteNote handleAddNote={handleAddNote}/>
        } 
        <div className="notes">
                {addNote.map((note, index) => {
                    return <NoteList 
                    key={index}
                    id={index}
                    title = {note.title}
                    content = {note.content}
                    handleDelete = {() => handleDelete(index)}
                    />                          
                })}                
            </div>
      </div>
    </div>
  );
}

export default App;
