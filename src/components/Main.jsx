import TasksList from "./TasksList";
function Main({ tasks }) {
  const tasksCompleted = tasks.filter((task) => task.state === "completed");
  const currentTasks = tasks.filter((task) => task.state !== "completed");

  return (
    <main className="container-fluid">
      <TasksList title="Current Tasks" tasks={currentTasks} />
      <TasksList title="Completed Tasks" tasks={tasksCompleted} />
    </main>
  );
}

export default Main;
