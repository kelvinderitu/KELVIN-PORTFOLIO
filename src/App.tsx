import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

import GitHubProjects from "./components/GitHubProjects";
import GitHubStats from "./components/GitHubStats";
import DevOps from "./components/DevOps";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
     
      <GitHubProjects />
      <GitHubStats />
      <DevOps />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;