import "./App.css";
import Counter from "./hooks/Counter";
import RoomWithCanvas from "./hooks/RoomWithCanvas";

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
    </>
  );
}

export default App;