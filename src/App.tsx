import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projectName, setProjectName] = useState("");
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjectList(data);
    };
    fetchProjects();
  }, []);

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
        <button
          onClick={async () => {
            await createProject(projectName);
            const response = await fetch("/api/projects");
            const data = await response.json();
            setProjectList(data);
          }}
        >
          Create Project
        </button>
      </div>
      <div className="project-list">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export interface Project {
  id?: number;
  title: string;
  milestones: Milestone[];
  todos: Todo[];
}

export interface Milestone {
  id?: number;
  title: string;
  todos: Todo[];
}

export interface Todo {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}

const createProject = async (projectName: string) => {
  const response = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      title: projectName,
    }),
  });
  const data: Project = await response.json();
  console.log(data);
};

export default App;
