import { Quest } from "../quests/quest";

export interface Player {
  id: number;
  nickname: string;
  xp: number;
  quests: Quest[];
}