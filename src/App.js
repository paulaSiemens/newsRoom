import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
        </Routes>
      </BrowserRouter>
      <MainContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
