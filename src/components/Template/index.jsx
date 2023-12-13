import Navbar from "./Navbar";

function Template({children}) {
  return (
    <>
      <Navbar />
      {children}
      <footer></footer>
    </>
  );
}

export default Template;
