import {Component, input, output} from '@angular/core';
import {Quest} from '../quest';
import {MatBadge} from '@angular/material/badge';
import {MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-quest-item',
  standalone: true,
  imports: [
    MatBadge,
    MatListItem,
    MatListItemLine,
    MatListItemTitle,
    MatIcon,
    MatIconButton,
    MatIcon,
    RouterLink
  ],
  templateUrl: './quest-item.component.html',
  styleUrl: './quest-item.component.css'
})
export class QuestItemComponent {
  quest = input.required<Quest>();
  questIndex = input.required<number>();
  onRemoveQuest = output<number>();

  removeQuest() {
    this.onRemoveQuest.emit(this.quest().id);
  }
}
