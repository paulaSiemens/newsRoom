import { Header } from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { SubmitIdea } from "./components/SubmitIdea";
import { Selection } from "./components/Selection";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submitIdea" element={<SubmitIdea />} />
          <Route path="/selection" element={<Selection />} />
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
