import { Navigation } from "./components/Navbar/Navigation";
import { MainSection } from "./components/Main/MainSection";
import { OfferSection } from "./components/Offer/OfferSection";
import { AboutMe } from "./components/About_Me/AboutMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainSection />
      <OfferSection />
      <AboutMe />
    </div>
  );
}

export default App;
