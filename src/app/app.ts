import {Component, computed, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
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
