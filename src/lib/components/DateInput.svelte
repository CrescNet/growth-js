<script lang="ts">
	let {
		value = $bindable(),
		class: className = ''
	}: {
		value?: Date;
		class?: string;
	} = $props();

	let internal = $derived(value?.toISOString().split('T', 1));

	function handleInput(event: Event) {
		const input = (event.currentTarget as HTMLInputElement).value;
		if (input !== undefined) {
			const date = new Date(input);
			if (date) {
				value = date;
			}
		}
	}
</script>

<input type="date" class="input {className}" value={internal} oninput={(e) => handleInput(e)} />
