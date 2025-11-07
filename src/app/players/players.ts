import { Component, inject, signal } from '@angular/core';
import { PlayersService } from './players.service';
import { Player } from './player';
import { MatList } from '@angular/material/list';
import { PlayerItem } from "./player-item/player-item";

@Component({
  selector: 'app-players',
  imports: [MatList, PlayerItem],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {
  private playersService = inject(PlayersService);

  playersSignal = signal<Player[]>(this.playersService.getPlayers());
}
