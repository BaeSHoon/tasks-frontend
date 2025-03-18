import axios from "axios";
import { useState } from "react";

function App() {
  const [projectName, setProjectName] = useState("");

  return (
    <>
      <h1>Projects</h1>
      <div>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button onClick={async () => await createProject(projectName)}>
          Create Project
        </button>
      </div>
    </>
  );
}

interface Project {
  id?: number;
  title: string;
  milestones: Milestone[];
  todos: Todo[];
}

interface Milestone {
  id?: number;
  title: string;
  todos: Todo[];
}

interface Todo {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}

const createProject = async (projectName: string) => {
  const response = await axios.post<Project>("/api/projects", {
    title: projectName,
  });
  const data = response.data;
  console.log(data);
};

export default App;
