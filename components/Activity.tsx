import { Activity, ActivityType } from "../model/Types.ts";

const getMessage = (activity: Activity) => {
  switch (activity.activityType) {
    case ActivityType.Note:
      return `${activity.participant1} added a note to ${activity.participant2}`;
    case ActivityType.Meeting:
      return `${activity.participant1} had a meeting with ${activity.participant2}`;
    case ActivityType.Call:
      return `${activity.participant1} had a call with ${activity.participant2}`;
    case ActivityType.Coffee:
      return `${activity.participant1} had a coffee with ${activity.participant2}`;
    case ActivityType.Beer:
      return `${activity.participant1} had a beer with ${activity.participant2}`;

    default:
      return "activity!";
  }
};

interface ActivityProps {
  activity: Activity;
  onDelete: (id: number) => void;
}
const Activity: React.FC = ({ activity, onDelete }) => {
  return (
    <div>
      <div>{activity.timestamp}</div>
      <div>{activity.type}</div>
      <div>
        {/* <div>{JSON.stringify(activity)}</div> */}
        <h3>{getMessage(activity)}</h3>
        <p>{activity.note}</p>
        <div onClick={() => onDelete(activity.id)}>Delete</div>
      </div>
    </div>
  );
};

export default Activity;
