<script lang="ts">
	let {
		value = $bindable()
	}: {
		value?: Date;
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

<input type="date" class="input" value={internal} oninput={(e) => handleInput(e)} />
