import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./Component/Header";
import ABPnews from "./assets/ABPnews.png";
import MainSection from "./Pages/MainSection";
import { Route, Routes } from "react-router-dom";
import ShowNewsDetails from "./Component/ShowNewsDetails";
import { Element } from "react-scroll";
function App() {
  let linkText = {
    links: [
      {
        text: "",
        href: "/",
        icon: reactLogo,
      },
      {
        text: "Contact",
        href: "#footer",
        icon: viteLogo,
      },
    ],
  };

  let contactLink = {
    links: [
      {
        text: "Instagram",
        href: "https://reactjs.org/",
        icon: reactLogo,
      },
      {
        text: "Facebook",
        href: "https://vitejs.dev/",
        icon: viteLogo,
      },
    ],
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="global-scrool-width">
        <Headers
          image={ABPnews}
          headerText="Abp News "
          linkText={linkText}
          textColor="#FF0000"
          id="header"
          bgText=''
        />
      </div>
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/show-news-data/:id" element={<ShowNewsDetails />} />
      </Routes>
      <Element name="section1">
        <Headers
          id="footer"
          image={ABPnews}
          headerText="@ copy right 2025 correct this"
          linkText={contactLink}
          textColor="white"
          bgColor='black'
        />
      </Element>
    </>
  );
}

export default App;
