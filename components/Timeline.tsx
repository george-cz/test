import AddActivity from "./AddActivity";
import ActivityList from "./ActivityList";
import Activity from "../model/Types";

import { useState, useCallback } from "react";

const Timeline: React.FC = () => {
  const [list, setList] = useState<Activity>([]);

  const onSubmit = useCallback((note, selectedType) => {
    setList([
      {
        id: Date.now(),
        note,
        activityType: selectedType,
        participant1: "You",
        participant2: "Milton Romaguera",
        timestamp: new Date().toISOString(),
      },
      ...list,
    ]);
  });

  const onDelete = useCallback((id: number) => {
    setList(list.filter((item) => item.id !== id));
  });

  return (
    <>
      <AddActivity onSubmit={onSubmit} />
      <ActivityList list={list} onDelete={onDelete} />
    </>
  );
};

export default Timeline;
