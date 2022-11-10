import Header from "./components/Header/Header";
import './components/style.css'
import FirstBlock from "./components/FirstBlock/FirstBlock";
import SecondBlock from "./components/SecondBlock/secondBlock";
import ThirdBlock from "./components/ThirdBlock/ThirdBlock";
import BlockP from "./components/blockP/blockP";

function App() {
  return (
    <>
      <Header/>
      <main className="Main_block">
        <section><FirstBlock/></section>
        <section><SecondBlock/></section>
        <section><ThirdBlock/></section>
        <BlockP/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
