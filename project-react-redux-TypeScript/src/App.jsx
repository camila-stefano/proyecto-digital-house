import "./App.css";
import Counter from "./hooks/Counter";
import RoomWithCanvas from "./hooks/RoomWithCanvas";
import { Office } from "./hooks/useContext/Office";
import { CounterReducer } from "./hooks/useReducer/CounterReducer";
import { InputWithFocus } from "./hooks/useRef/InputWithFocus";

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
    </>
  );
}

export default App;
