import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import MyApp1 from "mfeApp1/App";
import MyApp2 from "mfeApp2/App";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="mfeTitle">Micro FrontEnd</div>
      <div className="subTitle">Using Module Federation</div>

      <div className="mfeDesc">
        In this architectural pattern, a React Front End application is divided
        into two independantly developed and deployed components
      </div>

      <div className="container">
        <div>
          <MyApp1 />
        </div>

        <div>
          <MyApp2 />
        </div>
      </div>
    </>
  );
}

export default App;
