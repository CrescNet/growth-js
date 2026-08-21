export interface Reference {
	title: string;
	source?: string;
}

interface ReferenceDataRow {
	age: number;
	l?: number;
	m: number;
	s: number;
}

function approx(x: number, lowerX: number, lowerY: number, upperX: number, upperY: number): number {
	return lowerY + ((upperY - lowerY) * (x - lowerX)) / (upperX - lowerX);
}

function binsearchPos(array: number[], value: number): number {
	let low = 0;
	let high = array.length;
	while (low < high) {
		const cur = Math.floor((high - low) / 2 + low);
		if (value > array[cur]) {
			low = cur + 1;
		} else {
			high = cur;
		}
	}
	return low;
}

function getMatchingReferenceRow(
	referenceData: ReferenceDataRow[],
	age: number
): ReferenceDataRow | undefined {
	let lower = undefined as ReferenceDataRow | undefined;
	let upper = undefined as ReferenceDataRow | undefined;
	const index = binsearchPos(
		referenceData.map((r) => r.age),
		age
	);

	if (index >= referenceData.length) return referenceData[-1];
	if (index === 0) return referenceData[0];

	if (referenceData[index].age === age) {
		return referenceData[index];
	}

	if (referenceData[index].age > age) {
		lower = referenceData[index - 1];
		upper = referenceData[index];
	}

	if (lower && upper) {
		return {
			age: age,
			l: approx(age, lower.age, lower.l ?? 1, upper.age, upper.l ?? 1),
			m: approx(age, lower.age, lower.m, upper.age, upper.m),
			s: approx(age, lower.age, lower.s, upper.age, upper.s)
		} as ReferenceDataRow;
	}

	return lower;
}

export function rawFromLms(sds: number, l: number, m: number, s: number): number {
	return Math.abs(l) < 0.00001 ? Math.exp(s * sds) * m : (sds * l * s + 1) ** (1 / l) * m;
}

export function sdsFromLms(value: number, l: number, m: number, s: number): number {
	return Math.abs(l) < 0.00001 ? Math.log(value / m) / s : (Math.pow(value / m, l) - 1) / (l * s);
}

export function sdsFromReference(
	referenceData: ReferenceDataRow[],
	age: number,
	value: number
): number | undefined {
	const row = getMatchingReferenceRow(referenceData, age);
	return !row ? undefined : sdsFromLms(value, row.l ?? 1, row.m, row.s);
}

export function targetHeight(motherHeight: number, fatherHeight: number, sex: string): number {
	return (motherHeight + fatherHeight) / 2 + (sex == 'male' ? 6.5 : -6.5);
}

export function rawFromReference(
	referenceData: ReferenceDataRow[],
	age: number,
	value: number
): number | undefined {
	const row = getMatchingReferenceRow(referenceData, age);
	return !row ? undefined : rawFromLms(value, row.l ?? 1, row.m, row.s);
}

export function targetHeightSds(
	referenceData: ReferenceDataRow[],
	motherHeight: number,
	fatherHeight: number,
	sex: string
): number | undefined {
	return sdsFromReference(referenceData, 18, targetHeight(motherHeight, fatherHeight, sex));
}

export function sds(
	referenceData?: ReferenceDataRow[],
	age?: number,
	value?: number
): number | undefined {
	if (!referenceData || age == undefined || !value) return undefined;
	return sdsFromReference(referenceData, age, value);
}

export function age(birthdate?: Date, date?: Date): number | undefined {
	if (birthdate === undefined || date === undefined) return undefined;
	return (
		Math.round(((date.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)) * 10) / 10
	);
}

export function bmi(height?: number, weight?: number): number | undefined {
	if (height === undefined || weight === undefined) return undefined;
	return Math.round((weight / (height / 100) ** 2) * 100) / 100;
}
