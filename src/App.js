import "./styles.css";
import Counter from "./Part1/component/Counter";
import Todo from "./Part2/Components/Todo";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <div style={{ marginTop: "2rem" }}>
        <h1>TODO</h1>
        <Todo />
      </div>
    </div>
  );
}
