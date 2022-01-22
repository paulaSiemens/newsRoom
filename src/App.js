import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SubmitIdea from "./components/SubmitIdea";
import Unassigned from "./components/Unassigned";
import Assigned from "./components/Assigned";
import Submitted from "./components/Submitted";
import Archived from "./components/Archived";
import Employees from "./components/Employees";
import Start from "./components/Start";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Db from "./components/Db";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!Db.isLoggedIn() ? <Start /> : <Navigate to="/assigned" />}
          />
          <Route
            path="/signup"
            element={!Db.isLoggedIn() ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!Db.isLoggedIn() ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/submitIdea"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <SideNav />
                  <SubmitIdea />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/unassigned"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Unassigned />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/assigned"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Assigned />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/submitted"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Submitted />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/archived"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Archived />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/employees"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Employees />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
