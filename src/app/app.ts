import {Component, computed, signal} from '@angular/core';
import {QuestsComponent} from './quests/quests.component';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [QuestsComponent, MatButton, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quest-overflow');
  show = signal(false);
  buttonText = computed(() => this.show() ? 'Hide Quests' : 'Show Quests');

  toggle() {
    this.show.set(!this.show());
  }
}
