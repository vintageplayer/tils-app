// pages/index.js
import TableOfContents from "../pages/components/TableOfContent.js";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Today I learn</h1>
      </div>
      <div>
        <TableOfContents></TableOfContents>
      </div>
    </div>
  );
};

export default Home;
