import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FamilyTreeComponent } from '../../../family-tree/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FamilyTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'family-tree-demo';
}
