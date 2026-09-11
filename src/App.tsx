import Banner from "./components/Banner";
import Nav from "./components/Nav";

const playersFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
    </>
  );
}

export default App;
