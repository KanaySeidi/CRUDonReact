import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
