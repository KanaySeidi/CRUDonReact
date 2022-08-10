import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";
import ReduxPage from "./pages/ReduxPage";
import { store } from "./redux/store";

export const Navigation = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/redux" element={<ReduxPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};
