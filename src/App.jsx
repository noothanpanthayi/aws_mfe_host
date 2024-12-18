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
      <div className="container">

        <div className="card">
          <MyApp1 />
        </div>

        <div className="card">
          <MyApp2 />
        </div>
        
      </div>
    </>
  );
}

export default App;
