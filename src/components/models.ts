export interface UserInput {
  reference?: string,
  birthdate?: string,
  sex?: string,
  motherHeight?: number,
  fatherHeight?: number,
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
  disease: boolean
}

export interface ReferenceDataRow {
  age: number,
  l: number,
  m: number,
  s: number,
  p03?: number,
  p50?: number,
  p97?: number
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
  x: number,
  y: number
}