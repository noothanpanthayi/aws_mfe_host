import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <App/>
  // <BrowserRouter>
  //  <Routes>
  //    <Route path="/host" element={<App/>}></Route>
  //  </Routes>
  // </BrowserRouter>
);
