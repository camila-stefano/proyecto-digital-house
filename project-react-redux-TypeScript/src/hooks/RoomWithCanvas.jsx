import { useEffect, useState } from "react";

function RoomWithCanvas() {
  const [isLightOn, setIsLightOn] = useState(true);
  const [canvasColor, setCanvasColor] = useState("white");

  useEffect(() => {
    if (isLightOn) {
      setCanvasColor("bright");
    } else {
      setCanvasColor("dark");
    }
  }, [isLightOn]);

  return (
    <div>
      <button onClick={() => setIsLightOn(!isLightOn)}>
        {isLightOn ? "Apagar la luz" : "Encender la luz"}
      </button>
      <p>El lienzo esta pintado de color: {canvasColor}</p>
    </div>
  );
}

export default RoomWithCanvas;
