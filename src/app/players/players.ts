import { Component, inject, signal } from '@angular/core';
import { PlayersService } from './players.service';
import { Player } from './player';
import { MatList } from '@angular/material/list';
import { PlayerItem } from "./player-item/player-item";
import { QuestsService } from '../quests/quests.service';

@Component({
  selector: 'app-players',
  imports: [MatList, PlayerItem],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {
  private playersService = inject(PlayersService);
  private questsService = inject(QuestsService);

  playersSignal = signal<Player[]>(this.playersService.getPlayers());

  constructor(){
    this.assignQuestToPlayersRandom();
  }

  private assignQuestToPlayersRandom(): void {
    let quests = this.questsService.getQuests();
    this.playersSignal.update(players => players.map(p => {
      const randomIndex = Math.floor(Math.random() * quests.length);
      return {...p, quests: [quests[randomIndex]]};
    }));
  }
}
