import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/adduser" element={<Adduser />}></Route>
        <Route path="/edituser/:id" element={<Edituser />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
