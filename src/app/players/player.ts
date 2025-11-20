import { Quest } from "../quests/quest";

export interface Player {
  id: number;
  nickname: string;
  assignedQuests: Quest[];
  completedQuests: Quest[];
}
