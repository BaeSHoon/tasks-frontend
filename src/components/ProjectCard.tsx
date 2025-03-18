import { Project } from "../App";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <Link to={`/projects/${project.id}`}>
        <button>Detail</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
