import Header from "./assets/components/Header/Header";
import Hero from "./assets/components/Hero/Hero";
import About from "./assets/components/About/About";
import Qualify from "./assets/components/Qualification/Qualify";
import Work from "./assets/components/Work/Work";
import Contact from "./assets/components/Contact/Contact";
import Footer from "./assets/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Qualify />
        <Work />
        <Contact />
        <Footer />
      </main>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
