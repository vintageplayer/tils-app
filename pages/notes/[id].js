import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (id) {
      const getNote = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/notes/${id}`);
          if (response.ok) {
            const responseData = await response.json();
            const htmlContent = marked(responseData);
            const safeHTML = DOMPurify.sanitize(htmlContent);
            setHtmlContent(safeHTML);
          }
        } catch (error) {
          console.log("Error fetching note", error);
        }
      };
      getNote();
    }
  }, [id]);

  if (!htmlContent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Note ID: {id}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Note;
