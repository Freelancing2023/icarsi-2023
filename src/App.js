import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "./components/footer/Footer";
import Impdate from "./components/impdate/ImpDate";
import Committe from "./components/Committe/Committe";
import Aos from "aos";
import Hero from "./components/hero/Hero";
function App() {
  Aos.init();
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-container">
          <section id="hero">
            <Hero />
          </section>
          <section id="call-for-paper">
            <Impdate />
          </section>
          <section id="paper-submission">"</section>
          <section id="committee">
            <Committe />
          </section>
        </main>
        <HashLink className="back-to-top" to="#">
          <FaArrowUp />
        </HashLink>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
