import "./App.css";
import Counter from "./hooks/Counter";
import { MeasureElement } from "./hooks/MeasureElement";
import RoomWithCanvas from "./hooks/RoomWithCanvas";
import { ParentComponent } from "./hooks/useCallback/ParentComponent";
import { Office } from "./hooks/useContext/Office";
import { Statics } from "./hooks/useMemo/Statics";
import { CounterReducer } from "./hooks/useReducer/CounterReducer";
import { InputWithFocus } from "./hooks/useRef/InputWithFocus";
import ComponentBasic from "./proptypes/ComponentBasic";
import React from "react";

function App() {
  console.log("Render App");
  return (
    <>
      <div style={{ marginBottom: 5, padding: 5 }}>Hooks</div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid black" }}>
        useState = Counter App
        <Counter />
      </div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid black" }}>
        useEffect = Room With Canvas
        <RoomWithCanvas />
      </div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid black" }}>
        useContext
        <Office />
      </div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid black" }}>
        useReducer
        <CounterReducer />
      </div>
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid black" }}>
        useRef
        <InputWithFocus />
      </div>
      <div
        style={{
          marginBottom: 20,
          padding: 10,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        useLayoutEffect
        <MeasureElement />
      </div>
      <div
        style={{
          marginBottom: 20,
          padding: 10,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        useMemo
        <Statics />
      </div>
      <div
        style={{
          marginBottom: 20,
          padding: 10,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        useCallback
        <ParentComponent />
      </div>
      <div
        style={{
          marginBottom: 20,
          padding: 10,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        PropTypes
        <ComponentBasic texto={"Hola"} />
      </div>
    </>
  );
}

export default App;
