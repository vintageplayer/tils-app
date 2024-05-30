import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const MyEditor = ({ onSave }) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleChange = (content) => {
    setValue(content);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: value }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Server response:", result);

      // Call the onSave prop with the editor content
      const noteId = result.id;
      console.log("get the note id", noteId);
      // router.push(`/notes/${noteId}`);
      window.open(`/notes/${noteId}`, "_blank");
      onSave(value);
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={modules}
        theme="snow"
      />
      <button onClick={handleSave}>Save Content</button>
    </div>
  );
};

export default MyEditor;
