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
  
  assignQuestToPlayersRandom(): void {
    let quests = this.questsService.getQuests();
    
    for (let index = 0; index < this.playersSignal().length; index++) {
      const player = this.playersSignal()[index];

      let rndQuestIndex = Math.random()*quests.length;
      player.quests[0] = quests[rndQuestIndex];
    }
  }
}
