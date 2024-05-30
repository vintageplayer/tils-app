import React from "react";
import MyEditor from "../pages/editor";

const EditorPage = () => {
  const handleSave = (content) => {
    console.log("Saved Content:");
    // Here you can handle the saved content, e.g., send it to a server or update your state
  };

  return (
    <div>
      <h1>Online Editor</h1>
      <MyEditor onSave={handleSave} />
    </div>
  );
};

export default EditorPage;
