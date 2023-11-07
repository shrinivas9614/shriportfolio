import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  // EarthCanvas,
  // BallCanvas,
  // ComputerCanvas,
  StarsCanvas,
} from "./components";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <StarsCanvas />
          <Contact />
          <FeedbackForm />
          <Feedbacks />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
