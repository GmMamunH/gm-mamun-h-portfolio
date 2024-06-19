import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Contact/>

      <SocialLink />
     
    </>
  );
}
