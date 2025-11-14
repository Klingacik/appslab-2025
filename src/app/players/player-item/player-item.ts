import { Component, input } from '@angular/core';
import { Player } from '../player';
import {MatListItem, MatListItemTitle} from "@angular/material/list";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-player-item',
  imports: [MatListItem, MatListItemTitle, RouterLink],
  templateUrl: './player-item.html',
  styleUrl: './player-item.css'
})
export class PlayerItem {
  player = input.required<Player>();
}
