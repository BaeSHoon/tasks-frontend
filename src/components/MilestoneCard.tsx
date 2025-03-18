import { Milestone } from "../App";
import { Link } from "react-router-dom";

const MilestoneCard = ({ milestone }: { milestone: Milestone }) => {
  return (
    <div>
      <h2>{milestone.title}</h2>
      <Link to={`/milestones/${milestone.id}`}>
        <button>Detail</button>
      </Link>
    </div>
  );
};

export default MilestoneCard;
