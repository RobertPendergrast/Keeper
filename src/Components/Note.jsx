import React from "react";

function Note(props) {
  function handleDelete() {
    //console.log("Deleting note id = " + props.id);
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="deleteButton" onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
