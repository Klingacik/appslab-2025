import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestsService } from '../quests/quests.service';
import { Quest } from '../quests/quest';

@Component({
  selector: 'app-quest-detail',
  imports: [
  ],
  templateUrl: './quest-detail.component.html',
  styleUrl: './quest-detail.component.css'
})
export class QuestDetail {
  route: ActivatedRoute = inject(ActivatedRoute);
  questsService: QuestsService = inject(QuestsService);
  quest: Quest | undefined;

  constructor() {
    const questIdFromRoute = Number(this.route.snapshot.params['id']);
    this.quest = this.questsService.getQuestById(questIdFromRoute);
  }
}
