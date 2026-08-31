export function round(value?: number, digits = 1) {
	if (value === undefined) return undefined;
	const accuracy = 10 ** digits;
	return Number((Math.round(value * accuracy) / accuracy).toFixed(digits));
}

export function saveToFile(content: string, filename: string): void {
	const blob = new Blob([content], { type: 'text/plain' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.download = filename;
	a.href = url;
	a.click();
	URL.revokeObjectURL(url);
}

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

export function dateReviver(_: string, value: any) {
	if (typeof value === 'string' && ISO_DATE_REGEX.test(value)) {
		return new Date(value);
	}
	return value;
}
