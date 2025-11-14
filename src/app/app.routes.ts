import { Routes } from '@angular/router';
import {QuestsComponent} from './quests/quests.component';
import {Home} from './home/home';
import { QuestDetail } from './quest-detail/quest-detail.component';
import { Players } from './players/players';
import { PlayerDetail } from './player-detail/player-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'quests',
    component: QuestsComponent
  },
  {
    path: 'quests/:id',
    component: QuestDetail
  },
  {
    path: 'players',
    component: Players
  },
  {
    path: 'players/:id',
    component: PlayerDetail
  }
];
