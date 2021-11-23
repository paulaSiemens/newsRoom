import { Header } from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { SubmitIdea } from "./components/SubmitIdea";
import { Ideas } from "./components/Ideas";
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
          <Route path="/Ideas" element={<Ideas />} />
        </Routes>
      </BrowserRouter>

      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
