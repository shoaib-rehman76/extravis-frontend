import { useEffect } from "react";
import RoutesIndex from "./routes/routes";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <RoutesIndex />
    </>
  );
}

export default App;
