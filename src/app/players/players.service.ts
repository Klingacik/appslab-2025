import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private players:Player[] = [
    { id: 1, nickname: 'Klingacik', xp: 500 },
    { id: 2, nickname: 'SideEffectss', xp: 200 },
  ];

  getPlayers(): Player[] {
      return this.players;
  }
}
