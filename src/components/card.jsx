import React, { useState } from "react";

const Card = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleSave = () => {
    editNote(note.noteId, title, description);
    setIsEditing(false);
  };

  return (
    <div className="rounded overflow-hidden shadow-lg w-[400px] bg-white border border-gray-300 p-8">
      <div>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={title}
              placeholder="Enter title..."
              className="border rounded-sm bg-gray-200 w-full p-2 mb-2"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              value={description}
              placeholder="Enter description..."
              className="border rounded-sm bg-gray-200 w-full p-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h2 className="font-bold text-lg mb-2">{note.title}</h2>
            <p className="text-gray-700">{note.description}</p>
          </div>
        )}
      </div>

      <div className="flex mt-4 gap-4 justify-end">
        {isEditing ? (
          <div className="flex gap-4 mx-auto">
            <button
              onClick={handleSave}
              className="bg-purple-300 font-semibold py-2 px-4 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 font-semibold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-white bg-green-500 rounded px-4 py-2 hover:bg-green-600"
            >
              Edit
            </button>

            <button
              onClick={() => deleteNote(note.noteId)}
              className="text-white bg-red-500 rounded px-4 py-2 hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card