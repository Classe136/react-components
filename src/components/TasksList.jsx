import Badge from "./Badge";
function TasksList({ title, tasks }) {
  return (
    <section className="my-3 border-bottom">
      <h2>
        {title} {tasks.length}
      </h2>
      <ul className="list-group">
        {tasks.map((task) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={task.id}
            >
              <div>
                <span>{task.title}</span>
                <br />
                <span>{task.priority}</span>
                <br />
                <span>{task.estimatedTime}</span>
                <br />
              </div>
              <Badge state={task.state} badgestyle={task.state} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default TasksList;
