import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteList(props) {
    return (
            <div className="note" >
                <input type="text" value={props.title}/>
                <textarea name="note">{props.content}</textarea>
                <Button 
                variant="outlined" 
                startIcon={<DeleteIcon />} 
                className="delete-btn" 
                onClick={() => {
                    props.handleDelete(props.id)}}>
                    Delete
                </Button>
            </div>
    )
}

export default NoteList;