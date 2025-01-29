import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { FamilyMember } from '../../interfaces'

@Component({
  selector: 'lib-add-person-form',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './add-person-form.component.html',
  styleUrl: './add-person-form.component.scss'
})
export class AddPersonFormComponent {
  @Output() submitForm = new EventEmitter<FamilyMember>();
  @Output() cancel = new EventEmitter<void>();

  addPersonForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addPersonForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      birthDate: ['', Validators.required],
      deathDate: [null],
      gender: ['MALE', Validators.required],
      photoSrc: [null],
      relation: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addPersonForm.valid) {
      const newPerson: FamilyMember = {
        id: this.generateId(), // Генерация ID
        ...this.addPersonForm.value,
      };
      this.submitForm.emit(newPerson);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000); // Простая генерация ID
  }
}
