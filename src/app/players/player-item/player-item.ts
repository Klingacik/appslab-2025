import { Component, input } from '@angular/core';
import { Player } from '../player';
import { MatListItem } from "@angular/material/list";

@Component({
  selector: 'app-player-item',
  imports: [MatListItem],
  templateUrl: './player-item.html',
  styleUrl: './player-item.css'
})
export class PlayerItem {
  player = input.required<Player>();
}
