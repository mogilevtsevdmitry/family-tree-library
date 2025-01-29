import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FamilyMember } from '../../interfaces'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'lib-person-card',
  standalone: true,
  imports: [
    DatePipe,
  ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss'
})
export class PersonCardComponent {
  @Input() person!: FamilyMember;
  @Output() personClick = new EventEmitter<FamilyMember>();
  @Output() addRelative = new EventEmitter<void>();

  onPersonClick() {
    this.personClick.emit(this.person);
  }

  onAddRelative() {
    this.addRelative.emit();
  }
}
