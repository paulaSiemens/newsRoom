import { Header } from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { SubmitIdea } from "./components/SubmitIdea";
import { Selection } from "./components/Selection";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Parse from "parse";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={!Parse.User.current( ) ? <Signup /> : <Navigate to='/'/>} />
          <Route path="/login" element={!Parse.User.current( ) ? <Login /> : <Navigate to='/'/>} />
          <Route path="/submitIdea" element={Parse.User.current( ) ? <SubmitIdea /> : <Navigate to='/login'/>} />
          <Route path="/selection" element={Parse.User.current( ) ? <Selection /> : <Navigate to='/login'/>} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
