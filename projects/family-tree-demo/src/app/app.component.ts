import { Component } from '@angular/core';
import { FamilyMember, FamilyMembers } from '../../../family-tree-new/src/lib/interfaces'
import { FamilyTreeNewComponent } from '../../../family-tree-new/src/lib/family-tree.component'
import { FamilyDataService } from './family-data.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FamilyTreeNewComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'family-tree-demo';
  familyMembers: FamilyMembers;

  constructor(private familyDataService: FamilyDataService) {
    this.familyMembers = this.familyDataService.getFamilyData();
  }

  onPersonClick(person: FamilyMember) {
    console.log('Clicked person:', person);
  }

  onAddRelative(event: { person: FamilyMember; relation: string }) {
    console.log('Add relative:', event.person, event.relation);
  }
}
