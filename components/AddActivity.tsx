import { ActivityType } from "../model/Types.ts";
import { useState, useCallback } from "react";

const types = [
  ActivityType.Note,
  ActivityType.Call,
  ActivityType.Coffee,
  ActivityType.Beer,
  ActivityType.Meeting,
];

const typeToFriendlyName = {
  [ActivityType.Note]: "Note",
  [ActivityType.Call]: "Call",
  [ActivityType.Coffee]: "Coffee",
  [ActivityType.Beer]: "Beer",
  [ActivityType.Meeting]: "Meeting",
};

interface AddActivityProps {
  onSubmit: (note: string, selectedType: ActivityType) => void;
}

const AddActivity: React.FC<AddActivityProps> = ({ onSubmit }) => {
  const [note, setNote] = useState("");
  const [selectedType, setType] = useState(ActivityType.Note);

  const onTextareaChange = useCallback((e) => {
    setNote(e.target.value);
  });
  const onTypeChange = useCallback((e) => {
    setType(e.target.value);
  });

  const onSubmitCb = useCallback((e) => {
    e.preventDefault();
    onSubmit(note, selectedType);
  });

  return (
    <div>
      <div>
        <textarea onChange={onTextareaChange} />
      </div>
      {types.map((type) => (
        <button
          onClick={onTypeChange}
          value={type}
          key={type}
          disabled={type === selectedType}
        >
          {typeToFriendlyName[type]}
        </button>
      ))}
      <button type="submit" onClick={onSubmitCb}>
        Submit
      </button>
    </div>
  );
};

export default AddActivity;
