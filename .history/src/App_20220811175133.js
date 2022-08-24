import data from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState(0);
  const handleTab = (index) => {
    setTab(index);
  };
  return (
    <div className="max-w-[1200px] w-[100%] my-[100px] mx-auto border">
      {data.map((d) => (
        <div className="flex justify-around flex-wrap">
          <div className="max-w-[500px] min-w-[290px] overflow-hidden m-[25px]">
            <img
              key={d.id}
              className="w-[100%] h-[100%] max-h-[400px] object-cover"
              src={d.src[tab]}
              alt=""
            />
          </div>
          <div>
            <div>
              <h2 className="uppercase font-bold">{d.title}</h2>
            </div>
            <div className="flex w-[100%] h-[90px] cursor-pointer">
              {d.src.map((img, index) => (
                <img
                  key={index}
                  onClick={() => handleTab(index)}
                  className="w-[90px] h-[100%] border mr-2"
                  src={img}
                  alt=""
                />
              ))}
            </div>
            <div>
              {d.sizes.map((x) => (
                <p>{x}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
