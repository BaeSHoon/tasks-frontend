import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Todo } from "./App";

const ProjectDetails = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`/api/todos`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    fetch(`/api/todos`, {
      method: "POST",
      credentials: "include",
    });
  };

  return (
    <div>
      <h1>Project Details</h1>
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
