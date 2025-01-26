import { Component } from '@angular/core';
import { FamilyTreeComponent } from '../../../family-tree/src/public-api';
import { familyData } from './sample-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FamilyTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  persons = familyData
  title = 'family-tree-demo';
}
