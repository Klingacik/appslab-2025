import {computed, Injectable, signal} from '@angular/core';
import {Quest} from './quest';

@Injectable({
  providedIn: 'root'
})
export class QuestsService {

  private quests = signal([
    { id: 1, title: 'Find the Lost Sword', description: 'Retrieve the legendary sword from the ancient ruins.', xp: 150 },
    { id: 2, title: 'Rescue the Village', description: 'Help the villagers fend off the bandit attack.', xp: 25 },
    { id: 3, title: 'Collect Rare Herbs', description: 'Gather rare herbs for the village healer.', xp: 75}
  ]);

  questList = computed(() => this.quests());

  getQuests(): Quest[] {
    return this.quests();
  }

  getQuestById(id: number): Quest | undefined {
    return this.quests().find(quest => quest.id === id);
  }

  removeQuestById(id: number): void {
    this.quests.update(quests => quests.filter(quest => quest.id !== id));
  }

  addNewQuest(quest: Omit<Quest, 'id'> ): void {
    const maxId = this.quests().length ? Math.max(...this.quests().map(q => q.id)) : 0;
    const newQuest = { ...quest, id: maxId + 1 };
    this.quests.update(quests => [...quests, newQuest]);
  }
}
