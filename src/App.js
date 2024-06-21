import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
// import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skill from "./components/Skill";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <About/> */}

      <Experience />
      <Skill />
      <Contact />

      <SocialLink />
    </>
  );
}
