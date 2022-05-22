import { Navigation } from "./components/Navbar/Navigation";
import { MainSection } from "./components/Main/MainSection";
import { OfferSection } from "./components/Offer/OfferSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainSection />
      <OfferSection />
    </div>
  );
}

export default App;
