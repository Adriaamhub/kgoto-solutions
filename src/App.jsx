import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRouter from "./routes/Router";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <ScrollProgress />
      <BackToTop />

      <div className="bg-white text-slate-800 overflow-x-hidden">
        <AppRouter />
      </div>
    </>
  );
}

export default App;