import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<AboutMe/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/resume" exact element={<Resume/>}/>
        <Route path="/portfolio" exact element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
