import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      {data.map((d) => (
        <div>
          <div>
            <img src={d.src[0]} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
