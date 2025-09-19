import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuestsComponent} from './quests/quests.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuestsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quest-overflow');
}
