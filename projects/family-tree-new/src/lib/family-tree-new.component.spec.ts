import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeNewComponent } from './family-tree-new.component';

describe('FamilyTreeNewComponent', () => {
  let component: FamilyTreeNewComponent;
  let fixture: ComponentFixture<FamilyTreeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyTreeNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyTreeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
