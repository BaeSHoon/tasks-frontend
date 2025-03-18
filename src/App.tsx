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
        <button onClick={() => console.log(projectName)}>Create Project</button>
      </div>
    </>
  );
}

export default App;
