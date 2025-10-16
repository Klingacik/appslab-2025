import { Routes } from '@angular/router';
import {QuestsComponent} from './quests/quests.component';
import {Home} from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'quests',
    component: QuestsComponent
  }
];
