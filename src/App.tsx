import { useEffect, useState } from "react";

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
        <button onClick={async () => await createProject(projectName)}>
          Create Project
        </button>
      </div>
      <div className="project-list">
        {projectList.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <div>
              {project.milestones.map((milestone) => (
                <div key={milestone.id}>
                  <h3>{milestone.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
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
