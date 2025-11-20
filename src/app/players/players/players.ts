import {MatList} from '@angular/material/list';
import {PlayerItem} from '../player-item/player-item';
import {Component, computed, inject, signal} from '@angular/core';
import {Search} from '../../search/search';
import {PlayersService} from '../players.service';
import {Player} from '../player';

@Component({
  selector: 'app-players',
  imports: [MatList, PlayerItem, Search],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {
  private playersService = inject(PlayersService);

  private playersSignal = signal<Player[]>(this.playersService.getPlayers());

  searchValue = signal<string>('');
  filteredPlayersSignal = computed(() => this.playersSignal().filter(p => p.nickname.toLowerCase().includes(this.searchValue().toLowerCase())));
}
