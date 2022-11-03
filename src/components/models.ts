export interface UserInput {
  reference?: string,
  birthdate?: string,
  sex?: string,
  visits: Array<Visit>
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

export interface ReferenceDataRow {
  age: Number,
  l: Number,
  m: Number,
  s: Number,
  p03: Number,
  p50: Number,
  p97: Number
}

export interface SexReferenceData {
  male?: ReferenceDataRow[],
  female?: ReferenceDataRow[]
}

export interface ReferenceData {
  bmi?: SexReferenceData,
  height?: SexReferenceData,
  weight?: SexReferenceData
}

export interface CentileData {
  p03: Array<Coordinate>,
  p50: Array<Coordinate>,
  p97: Array<Coordinate>
}

export interface Coordinate {
  x: Number,
  y: Number
}