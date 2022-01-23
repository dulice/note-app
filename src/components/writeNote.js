import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function WriteNote(props) {
    const [writeNote, setWriteNote] = useState({
        title: "",
        content: "",
    });
    function handleChange(event) {
        const {name, value} = event.target;
        setWriteNote((preNote) => {
            return {
                ...preNote,
                [name] : value
            }
        })
    }

    return (
        <div className="write-note-container">

            <div className="write-note">

                <input
                name="title"
                value={writeNote.title}
                onChange={handleChange}
                 type="text" placeholder="Title"/>

                <textarea 
                value={writeNote.content}
                onChange={handleChange}
                name="content" placeholder="Take a note..."></textarea>                   
            </div>
            <button onClick={()=>{
                props.handleAddNote(writeNote);
                setWriteNote({
                    title: "",
                    content: ""
                });
            }
                } className="add-btn">
                   <AddIcon/>
                </button>
        </div>      
    )
}

export default WriteNote;