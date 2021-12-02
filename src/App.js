import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SubmitIdea from "./components/SubmitIdea";
import Selection from "./components/Selection";
import Assigned from "./components/Assigned";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Parse from "parse";

{
  /* FIXME refactor for resizing window reactive styling
    NOTE look into reach-boostrap components - correct link setup for icons/sidenav? */
}

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={!Parse.User.current() ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!Parse.User.current() ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/submitIdea"
            element={
              Parse.User.current() ? (
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
            path="/selection"
            element={
              Parse.User.current() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Selection />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/assigned"
            element={
              Parse.User.current() ? (
                <div className="mainContainer">
                  <SideNav />
                  <Assigned />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
