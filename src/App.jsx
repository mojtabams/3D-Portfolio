import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import {Navbar} from "./components/Navbar.jsx";

const App = () => {
    return (
      <>
          <Navbar/>
          <Hero />
          <ShowcaseSection/>
      </>
    )
}

export default App