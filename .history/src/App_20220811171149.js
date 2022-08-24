import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      {data.map((d) => (
        <div className="flex">
          <div>
            <img src={d.src[1]} alt="" />
          </div>
          <div>
            <div>
              <h2>{d.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
