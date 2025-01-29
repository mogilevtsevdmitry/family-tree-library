import { FamilyMembers } from '../../../family-tree-new/src/lib/interfaces'

export const familyData: FamilyMembers = {
  me: {
    id: 1,
    firstName: 'Дмитрий',
    lastName: 'Могилевцев',
    middleName: 'Александрович',
    birthDate: '1991-03-25',
    deathDate: null,
    gender: 'MALE',
    photoSrc: null,
    relation: null,
  },
  parents: [
    {
      id: 3,
      firstName: 'Александр',
      lastName: 'Могилевцев',
      middleName: 'Васильевич',
      birthDate: '1964-06-30',
      deathDate: null,
      gender: 'MALE',
      relation: 'FATHER',
      photoSrc: null,
    },
    {
      id: 4,
      firstName: 'Ирина',
      lastName: 'Могилевцева',
      middleName: 'Николаевна',
      birthDate: '1971-01-09',
      deathDate: null,
      gender: 'FEMALE',
      relation: 'MOTHER',
      photoSrc: null,
    },
  ],
  children: [
    {
      id: 5,
      firstName: 'Арина',
      lastName: 'Могилевцева',
      middleName: 'Дмитриевна',
      birthDate: '2019-09-03',
      deathDate: null,
      gender: 'FEMALE',
      relation: 'DAUGHTER',
      photoSrc: null,
    },
    {
      id: 6,
      firstName: 'Ксения',
      lastName: 'Могилевцева',
      middleName: 'Дмитриевна',
      birthDate: '2014-04-02',
      deathDate: null,
      gender: 'FEMALE',
      relation: 'DAUGHTER',
      photoSrc: null,
    },
  ],
  spouseAndSiblings: [
    {
      id: 2,
      firstName: 'Мария',
      lastName: 'Седлецкая',
      middleName: 'Сергеевна',
      birthDate: '1990-01-23',
      deathDate: null,
      gender: 'FEMALE',
      relation: 'WIFE',
      photoSrc: null,
    },
    {
      id: 7,
      firstName: 'Алёна',
      lastName: 'Могилевцева',
      middleName: 'Александровна',
      birthDate: '1992-05-18',
      deathDate: null,
      gender: 'FEMALE',
      relation: 'SISTER',
      photoSrc: null,
    },
  ],
};
