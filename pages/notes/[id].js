import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Note = () => {
  const router = useRouter();
  const { id } = router.query;
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the note content from your backend using the ID
      fetch(`http://127.0.0.1:5000/notes/${id}`)
        .then((response) => response.json())
        .then((data) => setNote(data))
        .catch((error) => console.error("Error fetching note:", error));
    }
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Note ID: {id}</h1>
      <div dangerouslySetInnerHTML={{ __html: note.content }} />
    </div>
  );
};

export default Note;

// import { useRouter } from "next/router";

// const DynamicPage = () => {
//   const router = useRouter();
//   const { id } = router.query; // Extract the dynamic parameter 'id' from the URL

//   return (
//     <div>
//       <h1>Dynamic Page</h1>
//       <p>The ID is: {id}</p>
//     </div>
//   );
// };

// export default DynamicPage;
