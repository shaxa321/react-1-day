import "./App.css";
import logo from "./logo.svg";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <h1>Il mio H1</h1>
      <p>lorem</p>

      <ButtonComponent text="Props Text" />
      <ImageComponent sorgente="http://placekitten.com/200/300" />
    </div>
  );
}

export default App;
