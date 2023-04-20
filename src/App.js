import "./App.css";
import TaskBottom from "./TaskBottom";
import TaskPage from "./TaskPage";

function App() {
  return (
    <div className="app px-3">
      <TaskPage />
      <div style={{ margin: "20px", height: "100px" }}></div>
      <TaskBottom />
    </div>
  );
}

export default App;
