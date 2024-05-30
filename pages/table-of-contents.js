import { useEffect, useState } from "react";
import Link from "next/link";

const TableOfContents = () => {
  const [noteIds, setNoteIds] = useState([]);

  useEffect(() => {
    const fetchNoteIds = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/notes");
        if (response.ok) {
          const ids = await response.json();
          setNoteIds(ids);
        }
      } catch (error) {
        console.log("Error fetching note IDs", error);
      }
    };
    fetchNoteIds();
  }, []);

  return (
    <div>
      <h1>Table of Contents</h1>
      <ul>
        {noteIds.map((noteId) => (
          <li key={noteId}>
            <Link href={`/notes/${noteId}`}>{noteId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
