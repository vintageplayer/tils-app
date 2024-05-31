import { useEffect, useState } from "react";
import Link from "next/link";

const TableOfContents = () => {
  const [notes, setNotes] = useState([]);
  // const [noteIds, setNoteIds] = useState([]);

  useEffect(() => {
    const fetchNoteIds = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/notes");
        if (response.ok) {
          const responseData = await response.json();
          console.log("responseData", responseData);
          const ids = responseData.map((data) => data.id);
          setNotes(responseData);
          // setNoteIds(ids);
        }
      } catch (error) {
        console.log("Error fetching note IDs", error);
      }
    };
    fetchNoteIds();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        All my learnings
      </h1>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="text-lg text-blue-700 hover:text-blue-800 transition-colors cursor-pointer"
          >
            <Link href={`/notes/${note.id}`}>
              {note.id} - {note.creation_date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
