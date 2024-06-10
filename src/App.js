import React from "react";
import "./App.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CustomRouter } from "./router/CustomRouter";


export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            {
              CustomRouter.map((item, index) => <Route key={index} {...item} />)
            }
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}