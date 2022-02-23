import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import { useState } from "react"


function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  function renderPage() {
    switch (currentPage) {
      case "AboutMe": return <AboutMe></AboutMe>
      case "Contact": return <Contact></Contact>
      case "Resume": return <Resume></Resume>
      case "Portfolio": return <Portfolio></Portfolio>
      default:
        break;
    }
  }
  return (
    <>
    <NavBar setCurrentPage={setCurrentPage}/>

    {renderPage() }
    <Footer/> 
    </>
  );
}

export default App;

// 1. pass currentPage and setCurrentPage as props into the NavBar component
// currentPage is just the string value, the prop will be the state variable currentPage={currentPage}, and setCurrentPage is the clickHandler function that the navbar links will have passed as their onClick function 

// ex <Nav setCurrentPage={setCurrentPage} /> 

// // in nav 
// <aboutmelink
//   onClick={setCurrentPage("AboutMe")}
// >

// </aboutmelink>

// 2. Inside NavBar need to add onClick handler functions and just place in setCurrentPage as the function and pass in the string for that page that we want to render setCurrentPage("AboutMe")
