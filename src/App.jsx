import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import SocialMediaLinks from "./components/SocialMediaLinks";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        {/* Add SocialMediaLinks to the footer */}
        <footer style={{ marginTop: "60px", textAlign: "center" }}>
          <SocialMediaLinks />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
