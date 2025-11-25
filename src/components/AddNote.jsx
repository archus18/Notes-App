import React, { useState } from "react";

const AddNote = ({ setNotes, notes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNote = () => {
    if (title === "" || description === "") {
      alert("Please fill in both the title and description fields.");
      return;
    }

    const newNote = {
      noteId: Date.now(),
      title,
      description,
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col justify-center rounded shadow-lg gap-4 w-96 mx-auto my-10 p-8 border border-gray-300 bg-white">
      <input
        type="text"
        value={title}
        placeholder="Enter the title of the Note..."
        className="border rounded-sm bg-white p-2"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={description}
        placeholder="Enter the description of the Note..."
        className="border rounded-sm bg-white p-2"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleAddNote}
        className="bg-purple-300 font-semibold py-2 px-4 rounded w-36 mx-auto" >
        Save Note
      </button>
    </div>
  );
};

export default AddNote;
