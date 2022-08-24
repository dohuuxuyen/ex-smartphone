import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="max-w-[1200px] w-[100%] my-[100px] mx-auto border">
      {data.map((d) => (
        <div className="flex justify-around flex-wrap">
          <div className="max-w-[500px] min-w-[290px] overflow-hidden m-[25px]">
            <img
              className="w-[100%] h-[100%] max-h-[400px] object-cover"
              src={d.src[0]}
              alt=""
            />
          </div>
          <div>
            <div>
              <h2 className="uppercase font-bold">{d.title}</h2>
            </div>
            <div className="flex">
              {d.src.map((img) => (
                <img src={img} alt="" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
