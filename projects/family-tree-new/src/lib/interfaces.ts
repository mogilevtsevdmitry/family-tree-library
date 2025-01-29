export type Gender = 'MALE' | 'FEMALE';
export type Relation =
  | 'HUSBAND'
  | 'WIFE'
  | 'FATHER'
  | 'MOTHER'
  | 'SON'
  | 'DAUGHTER'
  | 'BROTHER'
  | 'SISTER';

export interface FamilyMember {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  birthDate: string;
  deathDate: string | null;
  gender: Gender;
  photoSrc: string | null;
  relation: Relation | null;
}

export interface FamilyMembers {
  me: FamilyMember;
  parents: FamilyMember[];
  children: FamilyMember[];
  spouseAndSiblings: FamilyMember[];
}
