// pages/index.js
import EditorPage from "./components/EditorPage.js";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Today I learn</h1>
        <Link href="/table-of-contents">Go to Table of Contents</Link>
      </div>
      <div>
        <EditorPage></EditorPage>
      </div>
    </div>
  );
};

export default Home;
