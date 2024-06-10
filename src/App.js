/** @format */

import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./component/layout/Base";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}

export default App;
