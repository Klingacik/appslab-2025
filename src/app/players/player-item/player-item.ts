import { Component, input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-item',
  imports: [],
  templateUrl: './player-item.html',
  styleUrl: './player-item.css'
})
export class PlayerItem {
  player = input.required<Player>();
}
