import "./App.css";
import NavBar from "../Navbar/Navbar";
import Header from "../../containers/Header/Header";
import Brand from "../../components/Brand/Brand";
import Features from "../../containers/Features/Features";
import Possibility from "../../containers/Possibility/Possibility";
import WhatGPT3 from "../../containers/WhatGPT3/WhatGPT3";
import CTA from "../Cta/Cta";
import Blog from "../../containers/Blog/Blog";
import Footer from "../../containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
