import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PlayersService } from '../players/players.service';
import { Player } from '../players/player';
import { MatListItem } from "@angular/material/list";

@Component({
  selector: 'app-player-detail',
  imports: [MatListItem, RouterLink],
  templateUrl: './player-detail.html',
  styleUrl: './player-detail.css'
})
export class PlayerDetail {
  route: ActivatedRoute = inject(ActivatedRoute);
  playersService: PlayersService = inject(PlayersService);
  player: Player | undefined;

  constructor() {
    const playerIdFromRoute = Number(this.route.snapshot.params['id']);
    this.player = this.playersService.getPlayerById(playerIdFromRoute);
  }
}
