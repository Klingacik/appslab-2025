import {Component, model} from '@angular/core';
import {MatFormField, MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [
    MatInput,
    FormsModule,
    MatFormField
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchValue = model<string>('');
}
