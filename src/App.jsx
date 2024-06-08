import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookShelf from "./pages/BookShelf";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="w-[90%] mr-auto ml-auto relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<BookShelf />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
