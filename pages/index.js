// pages/index.js

import Link from "next/link";
import EditorPage from "./EditorPage";

const Home = () => {
  const texts = [
    { id: "1", text: "First text entry" },
    { id: "2", text: "Second text entry" },
    { id: "3", text: "Third text entry" },
  ];

  return (
    <div>
      <div>
        <h1>Home Page</h1>
        <ul>
          {texts.map((text) => (
            <li key={text.id}>
              <Link href={`/${text.id}`} legacyBehavior>
                <a>{text.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <EditorPage />
      </div>
    </div>
  );
};

export default Home;
