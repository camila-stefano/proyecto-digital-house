import { memo } from "react";

export const ChildComponent = memo(({ onClick }) => {
  console.log("Renderizado hijo");
  return <button onClick={onClick}>Increment</button>;
});
