import { useState } from "react";

const getInitialCount = () => {
  console.log("Obtener initial count");
  return 0;
};

const Counter = () => {
  console.log("Render Counter");

  const [count, setCount] = useState(() => getInitialCount());

  return <Button onClick={() => setCount(count + 1)}>+ {count}</Button>;
};

const Button = ({ onClick, children }) => {
  console.log("Render Button");
  return <button onClick={onClick}>{children}</button>;
};

export default Counter;
