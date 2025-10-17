import { Routes } from '@angular/router';
import {QuestsComponent} from './quests/quests.component';
import {Home} from './home/home';
import { QuestDetail } from './quest-detail/quest-detail.component';

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
  }
];
