import { Injectable } from '@angular/core';
import { FamilyMember, FamilyMembers } from '../../../family-tree-new/src/lib/interfaces'
import { familyData } from './sample-data'

@Injectable({
  providedIn: 'root'
})
export class FamilyDataService {
  familyMembers: FamilyMember[] = [];

  constructor() { }


  getFamilyData(): FamilyMembers {
    return familyData
  }

    addFamilyMember(newMember: FamilyMember, relation: string, targetMemberId: number) {
    const targetMember = this.familyMembers.find(member => member.id === targetMemberId);
    if (targetMember) {
      // Логика добавления нового члена семьи
      this.familyMembers.push(newMember);
    }
  }
}
