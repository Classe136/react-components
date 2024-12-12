import tasks from "./data/tasks.js";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
function App() {
  const taskList = [...tasks];
  return (
    <>
      <Header />
      <Main tasks={taskList} />
    </>
  );
}

export default App;
