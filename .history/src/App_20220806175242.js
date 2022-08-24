import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-[#658] underline">Hello world!</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
