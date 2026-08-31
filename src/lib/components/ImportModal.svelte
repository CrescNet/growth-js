<script lang="ts">
	import { m } from '$lib/paraglide/messages';

	let {
		open = $bindable()
	}: {
		open: boolean;
	} = $props();

	let dialogRef = $state<HTMLDialogElement>();
	let jsonString = $state<string>();

	$effect(() => {
		if (open) {
			dialogRef?.showModal();
		} else {
			dialogRef?.close();
		}
	});

	function doFileImport() {}

	function doStringImport() {}
</script>

<dialog bind:this={dialogRef} class="modal" onclose={() => (open = false)}>
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost" onclick={() => (open = false)}
				>x</button
			>
		</form>
		<h3 class="text-lg font-bold">{m.import()}</h3>

		<div class="divider my-0"></div>

		<p>{m.import_description()}</p>

		<div class="mt-3 grid grid-cols-2 items-center gap-x-5 gap-y-2">
			<input
				type="file"
				class="input"
				name="json-file"
				placeholder={m.json_file()}
				accept=".json"
			/>
			<button class="btn text-primary-content btn-primary" onclick={doFileImport}
				>{m.load_file()}</button
			>

			<input
				type="text"
				class="input"
				name="json-string"
				placeholder={m.json_string()}
				bind:value={jsonString}
			/>
			<button class="btn text-primary-content btn-primary" onclick={doStringImport}
				>{m.load_string()}</button
			>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button onclick={() => (open = false)}>close</button>
	</form>
</dialog>
