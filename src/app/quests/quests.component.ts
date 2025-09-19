import { Component } from '@angular/core';
import { Quest } from './quest';
import { MatListModule } from '@angular/material/list';
import {QuestItemComponent} from './quest-item/quest-item.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-quests',
  imports: [MatListModule, QuestItemComponent, MatButton],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.css'
})
export class QuestsComponent {
  quests: Quest[] = [
    { id: 1, title: 'Find the Lost Sword', description: 'Retrieve the legendary sword from the ancient ruins.', xp: 150 },
    { id: 2, title: 'Rescue the Village', description: 'Help the villagers fend off the bandit attack.', xp: 25 },
    { id: 3, title: 'Collect Rare Herbs', description: 'Gather rare herbs for the village healer.', xp: 75}
  ];

  addQuest() {
    const newQuest: Quest = { id: this.quests.length + 1, title: 'New Quest', description: 'A newly added quest.', xp: 75 };
    this.quests.push(newQuest);
  }

  removeQuest(questId: number) {
    this.quests.splice(this.quests.findIndex(q => q.id === questId), 1);
  }
}
