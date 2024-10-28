// src/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Blog from "./Components/Blog/Blog";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Form from "./Components/Form/Form";

function AppRouter() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">App</Link>
        <Link to="/blog" style={{ marginLeft: "10px" }}>
          Blog
        </Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:slug" element={<BlogDetail />} /> 
      </Routes>
    </Router>
  );
}

export default AppRouter;
