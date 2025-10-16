import {Injectable} from '@angular/core';
import {Quest} from './quest';

@Injectable({
  providedIn: 'root'
})
export class QuestsService {

  private quests = [
    { id: 1, title: 'Find the Lost Sword', description: 'Retrieve the legendary sword from the ancient ruins.', xp: 150 },
    { id: 2, title: 'Rescue the Village', description: 'Help the villagers fend off the bandit attack.', xp: 25 },
    { id: 3, title: 'Collect Rare Herbs', description: 'Gather rare herbs for the village healer.', xp: 75}
  ];

  constructor() {
    console.log('QuestsService initialized');
  }

  getQuests(): Quest[] {
    return this.quests;
  }

  getQuestById(id: number): Quest | undefined {
    return this.quests.find(quest => quest.id === id);
  }
}
