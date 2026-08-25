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
