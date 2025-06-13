import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarTop from "./components/Navbar/NavbarTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed/Feed";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Box sx={{ backgroundColor: "#000" }}>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
