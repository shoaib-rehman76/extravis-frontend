import { useEffect } from "react";
import "./App.css";
import RoutesIndex from "./routes/routes";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    
    // Add data-aos attribute to body for initial load animation
    document.body.setAttribute("data-aos", "fade-in");
    document.body.setAttribute("data-aos-duration", "4000");
    
    // Refresh AOS to recognize the body animation
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-in" data-aos-duration="4000">
      <RoutesIndex />
    </div>
  );
}

export default App;
