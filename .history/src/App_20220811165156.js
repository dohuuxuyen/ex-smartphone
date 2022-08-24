import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-[#658] text-center underline">
        Hello world!
      </h1>
      <div className="border border-[#333] w-[100%] h-[90vh]">
        {data.map((d) => (
          <div key={d.id} className="w-[300px] h-[400px]">
            <img
              className="w-[100%] h-[100%] m-6 object-cover"
              src={d.src[0]}
              alt=""
            />
            {d.src.map((img) => (
              <img src={img} alt="" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
