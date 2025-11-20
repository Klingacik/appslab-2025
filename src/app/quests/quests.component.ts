import { Component, inject } from '@angular/core';
import { Quest } from './quest';
import {QuestsService} from './quests.service';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {QuestListComponent} from './quest-list/quest-list.component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-quests',
  imports: [MatListModule, MatButton, QuestListComponent, MatIcon, MatIconButton, MatIcon],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.css'
})
export class QuestsComponent {
  private questsService = inject(QuestsService);

  quests = this.questsService.questList;

  addQuest() {
    const newQuest: Omit<Quest, 'id'> = { title: 'New Quest', description: 'A newly added quest.', xp: 75 };
    this.questsService.addNewQuest(newQuest);
  }

  removeQuest(id: number) {
    this.questsService.removeQuestById(id)
  }
}
