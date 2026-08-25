import { browser } from '$app/environment';

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function dateReviver(_: string, value: any) {
	if (typeof value === 'string' && ISO_DATE_REGEX.test(value)) {
		return new Date(value);
	}
	return value;
}

export class LocalStore<T> {
	value = $state<T>() as T;
	key = '';

	constructor(key: string, value: T) {
		this.key = key;
		this.value = value;

		if (browser) {
			const item = localStorage.getItem(key);
			if (item) this.value = JSON.parse(item, dateReviver);
		}

		$effect.root(() => {
			$effect(() => {
				if (this.value === undefined) {
					localStorage.removeItem(key);
				} else {
					localStorage.setItem(this.key, JSON.stringify(this.value));
				}
			});
		});
	}
}

export function localStore<T>(key: string, value: T) {
	return new LocalStore(key, value);
}
