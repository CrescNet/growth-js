import { browser } from '$app/environment';
import { dateReviver } from './utils';

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
