import {Component, computed, effect, inject, input, TemplateRef} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatList} from "@angular/material/list";
import {QuestItemComponent} from "../quest-item/quest-item.component";
import {Quest} from '../quest';
import {QuestsService} from '../quests.service';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-quest-list',
  standalone: true,
  imports: [
    MatList,
    QuestItemComponent,
    NgTemplateOutlet
  ],
  templateUrl: './quest-list.component.html',
  styleUrl: './quest-list.component.css'
})
export class QuestListComponent {
  questCountLabel = 'Quests count';

  quests = input.required<Quest[]>();
  actionTemplate = input<TemplateRef<any> | undefined>(undefined);
  count = computed(() => this.quests().length);

  constructor() {
    effect(() => {
      console.log(this.quests().length)
    });
  }
}
