export type Gender = 'MALE' | 'FEMALE';
export type Relation =
  | 'HUSBAND'
  | 'WIFE'
  | 'FATHER'
  | 'MOTHER'
  | 'SON'
  | 'DAUGHTER'
| 'BROTHER'
| 'SISTER'

export interface TreeNode {
  id: number,
  firstName: string,
  lastName: string,
  middleName: string | null,
  birthDate: string,
  deathDate: string | null,
  gender: Gender,
  photoSrc: string | null,
  relation: Relation | null,
}

export interface TreeNodes {
  me: TreeNode,
  parents: TreeNode[],
  children: TreeNode[],
  spouseAndSiblings: TreeNode[],
}
