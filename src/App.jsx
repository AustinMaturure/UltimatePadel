import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/ABout";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Courts from "./components/Courts";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Cafe from "./components/Cafe";
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Pricing /> <Cafe />
      <Courts />
      <Schedule />
      <Footer />
    </>
  );
}

export default App;
