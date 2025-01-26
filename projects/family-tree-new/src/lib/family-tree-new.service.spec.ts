import { TestBed } from '@angular/core/testing';

import { FamilyTreeNewService } from './family-tree-new.service';

describe('FamilyTreeNewService', () => {
  let service: FamilyTreeNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyTreeNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
