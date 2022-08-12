export interface UserInput {
  reference?: string,
  birthdate?: string,
  sex?: string,
  visits?: Array<Visit>
}

export interface Visit {
  date?: string,
  height?: number,
  weight?: number
}

export interface ReferenceDeclaration {
  value: string,
  label?: string,
  authors?: string,
  url?: string,
}
