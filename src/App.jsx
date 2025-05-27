import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {LogoSection} from "./components/LogoSection.jsx";

const App = () => {
    return (
      <>
          <Navbar/>
          <Hero />
          <ShowcaseSection/>
          <LogoSection/>
      </>
    )
}

export default App