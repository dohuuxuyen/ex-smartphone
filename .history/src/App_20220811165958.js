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
          <div key={d.id} className="w-[300px] h-[400px] flex items-center">
            <img
              className="w-[100%] h-[100%] m-6 object-cover"
              src={d.src[0]}
              alt=""
            />
            <div>
              {d.colors.map((color) => (
                <div className=`bg-{color} w-5 h-5`></div>
              ))}
            </div>
            {d.src.map((img) => (
              <img
                className="w-[90px] h-[100px] mr-5 border border-[#333]"
                src={img}
                alt=""
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
