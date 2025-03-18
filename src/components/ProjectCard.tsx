import { Project } from "../App";
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <a>{project.milestones.length}</a>
      <a>{project.todos.length}</a>
    </div>
  );
};

export default ProjectCard;
