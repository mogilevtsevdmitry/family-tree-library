import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-family-tree-new',
  standalone: true,
  imports: [],
  template: ` <div class="root"></div> `,
  styleUrl: './family-tree.style.scss',
})
export class FamilyTreeNewComponent {
  @Input() data = [];
}
