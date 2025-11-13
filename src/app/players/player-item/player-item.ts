import { Component, input } from '@angular/core';
import { Player } from '../player';
import {MatListItem, MatListItemTitle} from "@angular/material/list";

@Component({
  selector: 'app-player-item',
  imports: [MatListItem, MatListItemTitle],
  templateUrl: './player-item.html',
  styleUrl: './player-item.css'
})
export class PlayerItem {
  player = input.required<Player>();
}
