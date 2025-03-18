import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Todo } from "./App";

const ProjectDetails = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`/api/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [id]);

  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {id}</p>
      <button onClick={() => console.log("Add Todo Clicked")}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
