import { inject, Injectable } from '@angular/core';
import { Player } from './player';
import { QuestsService } from '../quests/quests.service';
import { Quest } from '../quests/quest';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private readonly questsService = inject(QuestsService);
  private readonly availableQuests: Quest[];
  private readonly players: Player[];

  constructor() {
    this.availableQuests = this.questsService.getQuests();
    this.players = this.createDefaultPlayers();
  }

  getPlayers(): Player[] {
    return [...this.players];
  }

  private createDefaultPlayers(): Player[] {
    const defaultPlayerData = [
      { id: 1, nickname: 'Klingacik', xp: 500 },
      { id: 2, nickname: 'SideEffectss', xp: 200 }
    ];

    return defaultPlayerData.map(playerData => ({
      ...playerData,
      quests: [this.getRandomQuest()]
    }));
  }

  private getRandomQuest(): Quest {
    if (this.availableQuests.length === 0) {
      throw new Error('No quests available to assign');
    }
    
    const randomIndex = Math.floor(Math.random() * this.availableQuests.length);
    return { ...this.availableQuests[randomIndex] };
  }
}
