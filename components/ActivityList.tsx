import { Activity as ActivityType } from "../model/Types.ts";
import Activity from "./Activity";

interface ActivityListProps {
  list: ActivityType[];
  onDelete: (id: number) => void;
}
const ActivityList: React.FC = ({ list, onDelete }) => {
  return (
    <div>
      {list.map((activity) => (
        <Activity activity={activity} key={activity.id} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ActivityList;
