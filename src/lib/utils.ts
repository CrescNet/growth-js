export function round(value?: number, digits = 1) {
  if (value === undefined) return undefined;
  const accuracy = 10 ** digits;
  return Number((Math.round(value * accuracy) / accuracy).toFixed(digits));
}
