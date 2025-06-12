import { useState } from "react";
import NavbarTop from "./components/Navbar/NavbarTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <NavbarTop />
      <Sidebar />
    </>
  );
}

export default App;
