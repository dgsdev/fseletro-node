import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./Components/Rotas";

function App() {
  return (
    <Router>
      <Navbar />

      <Rotas />

      <Footer />
    </Router>
  );
}

export default App;
