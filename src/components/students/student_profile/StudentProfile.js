import React, { useState } from "react";

import { NavSideBarLayout } from "../../routes";
import ProgressBar from "./ProgressBar";
import arrow from './arrow.svg';

function NoteForm({ onSubmit, onClose }) {
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(note);
    setNote("");
    onClose();
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note...."
        value={note}
        onChange={handleNoteChange}
      />
      <button style={{
                marginTop: '4vh',
                width: '4rem',
                height: '2rem',
                backgroundColor: '#f07F1A',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }} type="submit">Save</button>
      <button style={{
                marginTop: '1vh',
                width: '4rem',
                height: '2rem',
                backgroundColor: '#f07F1A',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }} onClick={onClose}>Close</button>
    </form>
  );
}

function AddNoteButton({ onClick }) {
  return (
    <button style={{ position: "absolute", top: 0, right: 0, border: "none" }} onClick={onClick}>
      <img src={arrow} />
    </button>
  );
}


function NotePopup({ show, onSubmit, onClose }) {
  if (!show) return null;

  return (

    
      <div className="popup-content">
        <NoteForm onSubmit={onSubmit} onClose={onClose} />
      </div>
    
  );
}

export default function StudentProfile(props) {
  const [notes, setNotes] = useState([]);
  const [showNotePopup, setShowNotePopup] = useState(false);

  function handleAddNote() {
    setShowNotePopup(true);
  }

  function handleNoteSubmit(newNote) {
    if (newNote.trim() === "") {
      return;
    }
    setNotes([...notes, newNote]);
    setShowNotePopup(false);
  }

  function handleNoteClose() {
    setShowNotePopup(false);
  }

  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: "4rem" }}>
        <div className="App">
          <ProgressBar />

          <div
            style={{
              boxSizing: "border-box",

              position: "absolute",
              width: "25vw",
              height: "74vh",
              left: "73vw",
              top: "23vh",

              background: "#FFFFFF",
              border: "1px solid #F07F1A",
              boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
            }}
          >
            <p className="heading2">Notes</p>
            <AddNoteButton onClick={handleAddNote} />
            <ul>
              {notes.map((note, index) => (
                <li className="notes" key={index}>{note}</li>
              ))}
            </ul>
            <NotePopup
              show={showNotePopup}
              onSubmit={handleNoteSubmit}
              onClose={handleNoteClose}
            />
          </div>
        </div>
      </NavSideBarLayout>
      <style>{`
        .heading2 {
          margin-top: -2vh;
          background-color: #F07F1A;
          width: 10vw;
          border-bottom-right-radius: 50%;
          border-bottom-left-radius: 50%;
          padding-bottom: 1vh;
          padding-top: 1vh;
          font-size: 22px;
          text-align: center;
          margin-left: 8vw;
        }

       
       
    
        .popup-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
    
  
    
        .notes {
          margin-bottom: 10px;
          margin-left : 1.5vw;
        }
    
      `}</style>
    </div>
);
}   
