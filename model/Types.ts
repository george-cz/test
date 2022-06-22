export enum ActivityType {
  Note = "note",
  Meeting = "meeting",
  Call = "call",
  Coffee = "coffee",
  Beer = "beer",
}

export type Activity = {
  id: number;
  participant1: string;
  participant2: string;
  activityType: ActivityType;
  note: string;
  timestamp: string;
};
