import { useEffect, useState } from "react";
import "./App.css";
import Headers from "./components/Headers/Headers";
import MainRoutes from "./routes/MainRoutes";
import { Link, Element } from "react-scroll";
import Footer from "./components/Footer/Footer";
import Introduce from "./components/Introduce/Introduce";
import SideElements from "./components/SideElements/SideElements";

function App() {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [showIntroduce, setShowIntroduce] = useState(true);

  useEffect(() => {
    // Задержка в 3 секунды перед скрытием компонента <Introduce>
    const timer = setTimeout(() => {
      setShowIntroduce(false);
    }, 6000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);
  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
    setCirclePosition({ x: pageX, y: pageY });
  };

  const circleStyle = {
    position: "absolute",
    top: circlePosition.y - 15,
    left: circlePosition.x - 15,
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    border: "2px solid tomato",
    transition: "top 0.3s ease, left 0.3s ease, border 0.3s ease",
    pointerEvents: "none",
    zIndex: 9,
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div style={circleStyle}></div>
      {showIntroduce && <Introduce></Introduce>}
      {!showIntroduce ? (
        <div>
          <Headers />
          <SideElements></SideElements>
          <MainRoutes />
          <Footer />
        </div>
      ) : null}
    </div>
  );
}

export default App;
