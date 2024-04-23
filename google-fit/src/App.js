import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import "./App.scss";
import Main from "./pages/Main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route for Main page */}

          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
