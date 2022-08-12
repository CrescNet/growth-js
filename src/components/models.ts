export interface UserInput {
  reference?: string,
  birthdate?: Date,
  sex?: string,
  visits?: Array<Visit>
}

export interface Visit {
  date?: Date,
  height?: number,
  weight?: number
}

export interface ReferenceDeclaration {
  value: string,
  label?: string,
  authors?: string,
  url?: string,
}
