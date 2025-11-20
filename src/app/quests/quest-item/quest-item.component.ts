import {Component, input, output} from '@angular/core';
import {Quest} from '../quest';
import {MatBadge} from '@angular/material/badge';
import {MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-quest-item',
  standalone: true,
  imports: [
    MatBadge,
    MatListItem,
    MatListItemLine,
    MatListItemTitle,
    RouterLink
  ],
  templateUrl: './quest-item.component.html',
  styleUrl: './quest-item.component.css'
})
export class QuestItemComponent {
  quest = input.required<Quest>();
  questIndex = input.required<number>();
}
