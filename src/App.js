import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Page from "./components/Page";
import SubmitIdea from "./components/mains/SubmitIdea";
import Selection from "./components/mains/Selection";
import Assigned from "./components/mains/Assigned";
import Submitted from "./components/mains/Submitted";
import Archived from "./components/mains/Archived";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Parse from "parse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={!Parse.User.current() ? <Signup /> : <Navigate to="/page" />}
          />
          <Route
            path="/login"
            element={!Parse.User.current() ? <Login /> : <Navigate to="/page" />}
          />
          <Route
            path="/page"
            element={Parse.User.current() ? <Page /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
