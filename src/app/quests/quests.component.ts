import { Component, computed, inject, signal } from '@angular/core';
import { Quest } from './quest';
import {QuestItemComponent} from './quest-item/quest-item.component';
import {QuestsService} from './quests.service';
import {MatButton} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-quests',
  imports: [MatListModule, QuestItemComponent, MatButton],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.css'
})
export class QuestsComponent {
  private questsService = inject(QuestsService);

  questCountLabel = 'Quests count';
  quests = signal<Quest[]>(this.questsService.getQuests());
  count = computed(() => this.quests().length);

  addQuest() {
    const maxId = this.quests().length ? Math.max(...this.quests().map(q => q.id)) : 0;
    const newQuest: Quest = { id: maxId + 1, title: 'New Quest', description: 'A newly added quest.', xp: 75 };
    this.quests.update(quests => [...quests, newQuest]);
  }

  removeQuest(questId: number) {
    this.quests.update(quests => quests.filter(q => q.id !== questId));
  }
}
