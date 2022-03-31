import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import BookList from "./componets/BookList";
import Categories from "./componets/categories";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="Categories" element={<Categories />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
