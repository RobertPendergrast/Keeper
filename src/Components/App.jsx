import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

let noteList = notes;

function App() {
  function createNote(note) {
    let id = note.key;
    return (
      <Note
        key={note.key}
        id={id}
        title={note.title}
        content={note.content}
        onDelete={filterNotes}
      />
    );
  }

  const [fullNote, setFullNote] = useState({
    Title: "",
    Content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullNote((prevValue) => {
      if (name === "Title") {
        return {
          Title: value,
          Content: prevValue.Content,
        };
      } else if (name === "Content") {
        return {
          Title: prevValue.Title,
          Content: value,
        };
      }
    });
  }

  function handleSubmit() {
    event.preventDefault();
    let newNote = {
      key: noteList.length + 1,
      title: fullNote.Title,
      content: fullNote.Content,
    };
    noteList.push(newNote);

    setFullNote({
      Title: "",
      Content: "",
    });
  }

  function filterNotes(id) {
    //console.log("filtering Notes!");
    noteList = noteList.filter(function (note) {
      return note.key != id;
    });
    //console.table(noteList);
    setFullNote({
      Title: "",
      Content: "",
    });
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="Title"
            onChange={handleChange}
            type="text"
            placeholder="Title"
            value={fullNote.Title}
          />
          <input
            name="Content"
            onChange={handleChange}
            type="text"
            placeholder="Take a note..."
            value={fullNote.Content}
          />
          <button className="addButton">Add</button>
        </div>
      </form>
      {noteList.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
