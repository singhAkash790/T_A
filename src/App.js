import React from "react";
import Footer from "./components/essentials/Footer/index.js";
import New_Launch from "../src/pages/Page1/New_Launch/index.js"
import Crafting from "../src/pages/Page1/Crafting/index.js"
import Figures from "../src/pages/Page1/Figures/index.js"
import Contact_us from "../src/pages/Page1/Contact_us/index.js"
import Header from "./components/essentials/Header/Index.js";


const App = () => {
  return (
    <>
      <Header/>
      <Crafting/>
      <New_Launch/>
      <Figures/>
      <Contact_us/> 
      <Footer/>

    </>
  );
};

export default App;
