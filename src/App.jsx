import "./App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

import Categories from "./Components/Categories";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-ind-300 h-auto w-auto">
        <Nav />
        <Hero />
        <Categories />
        <Footer />
      </div>
    </>
  );
}

export default App;
