import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [isExpanded, setIsExpanded] = useState(false);
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function handleExpand() {
        setIsExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    value={note.title}
                />}
                <textarea
                    name="content"
                    onClick={handleExpand}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={note.content}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
