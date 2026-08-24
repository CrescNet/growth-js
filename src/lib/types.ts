export interface Measurement {
	date?: Date;
	height?: number;
	weight?: number;
}

export interface ReferenceData {
	bmi?: SexReferenceData;
	height?: SexReferenceData;
	weight?: SexReferenceData;
}

export interface ReferenceDataRow {
	age: number;
	l?: number;
	m: number;
	s: number;
	p03?: number;
	p50?: number;
	p97?:number;
}

export interface ReferenceDeclaration {
	value: string;
	label: string;
	authors: string;
	url: string;
	disease: boolean;
}

export interface SexReferenceData {
	diverse?: ReferenceDataRow[];
	female?: ReferenceDataRow[];
	male?: ReferenceDataRow[];
}
