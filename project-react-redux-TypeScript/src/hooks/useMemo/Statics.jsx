import { useMemo, useState } from "react";
import { data } from "../../database";

const average = (list) => {
  console.log("Calculando Average");
  const suma = list.reduce((a, b) => a + b.amount, 0);
  return `el promedio es ${suma / list.length}`;
};

export const Statics = () => {
  const [show, setShow] = useState(false);

  const averageMemo = useMemo(() => average(data), []);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <h2>Statics {averageMemo}</h2>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};
