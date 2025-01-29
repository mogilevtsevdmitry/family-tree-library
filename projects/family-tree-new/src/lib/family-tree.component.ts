import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { FamilyMember, FamilyMembers } from './interfaces'
import { PersonCardComponent } from './components/person-card/person-card.component'
import { CommonModule } from '@angular/common'
import { AddPersonFormComponent } from './components/add-person-form/add-person-form.component'

@Component({
  selector: 'lib-family-tree-new',
  standalone: true,
  imports: [ PersonCardComponent, CommonModule, AddPersonFormComponent ],
  templateUrl: './family-tree.component.html',
  styleUrl: './family-tree.component.scss',
})
export class FamilyTreeNewComponent {
  @ViewChild('addPersonDialog') addPersonDialog!: HTMLDialogElement;
  @Input() familyMembers: FamilyMembers | null = null;
  scale = 1;
  offsetX = 0;
  offsetY = 0;
  isDragging = false;
  startX = 0;
  startY = 0;

  @HostListener('wheel', [ '$event' ])
  onWheel(event: WheelEvent) {
    if (event.ctrlKey) {
      event.preventDefault();
      this.scale += event.deltaY * -0.01;
      this.scale = Math.min(Math.max(0.5, this.scale), 2); // Ограничиваем масштаб
    }
  }

  @HostListener('mousedown', [ '$event' ])
  onMouseDown(event: MouseEvent) {
    if (event.button === 0) { // Левая кнопка мыши
      this.isDragging = true;
      this.startX = event.clientX - this.offsetX;
      this.startY = event.clientY - this.offsetY;
    }
  }

  @HostListener('mousemove', [ '$event' ])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.offsetX = event.clientX - this.startX;
      this.offsetY = event.clientY - this.startY;
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isDragging = false;
  }

  onPersonClick(person: FamilyMember) {
    console.log('onPersonClick', { person })
  }

  onAddRelative() {
    console.log({ addPersonDialog: this.addPersonDialog })
    // this.addPersonDialog.showModal(); // Открываем модальное окно
  }

  onDialogSubmit(newPerson: FamilyMember) {
    switch (newPerson.relation) {
      case 'BROTHER' || 'SISTER' || 'WIFE':
        this.familyMembers?.spouseAndSiblings.push(newPerson);
        break
      case 'SON' || 'DAUGHTER':
        this.familyMembers?.children.push(newPerson);
        break
      case 'FATHER' || 'MOTHER':
        this.familyMembers?.parents.push(newPerson);
        break
      default:
        return
    }

    this.addPersonDialog.close(); // Закрываем модальное окно
  }

  onDialogCancel() {
    this.addPersonDialog.close(); // Закрываем модальное окно
  }
}
