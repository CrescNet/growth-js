<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { availableReferences } from '$lib/reference.svelte';
	import type { Measurement, ReferenceDeclaration } from '$lib/types';
	import { dateReviver } from '$lib/utils';

	let {
		open = $bindable(),
		reference = $bindable(),
		sex = $bindable(),
		birthDate = $bindable(),
		fatherHeight = $bindable(),
		motherHeight = $bindable(),
		measurements = $bindable()
	}: {
		open: boolean;
		reference?: ReferenceDeclaration;
		sex?: string;
		birthDate?: Date;
		fatherHeight?: number;
		motherHeight?: number;
		measurements: Measurement[];
	} = $props();

	let dialogRef = $state<HTMLDialogElement>();
	let files = $state<FileList | undefined>();
	let jsonString = $state<string>();

	$effect(() => {
		if (open) {
			dialogRef?.showModal();
		} else {
			dialogRef?.close();
		}
	});

	function doFileImport() {
		const reader = new FileReader();
		reader.onload = (e: ProgressEvent<FileReader>) =>
			doStringImport((e.target?.result as string) ?? '');

		if (files && files.length == 1) {
			const jsonFile = files.item(0);
			if (jsonFile) {
				reader.readAsText(jsonFile);
			}
		}
	}

	function doStringImport(jsonString?: string) {
		if (jsonString !== undefined && jsonString !== '') {
			const data = JSON.parse(jsonString, dateReviver);
			reference = availableReferences.find((r) => r.value === data.referenceId);
			sex = data.sex;
			birthDate = data.birthDate;
			fatherHeight = data.fatherHeight;
			motherHeight = data.motherHeight;
			measurements = data.measurements;
			open = false;
		}
	}
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
				bind:files
			/>
			<button
				class="btn text-primary-content btn-primary"
				disabled={!files || files.length === 0}
				onclick={doFileImport}>{m.load_file()}</button
			>

			<input
				type="text"
				class="input"
				name="json-string"
				placeholder={m.json_string()}
				bind:value={jsonString}
			/>
			<button
				class="btn text-primary-content btn-primary"
				disabled={jsonString === undefined || jsonString === ''}
				onclick={() => doStringImport(jsonString)}>{m.load_string()}</button
			>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button onclick={() => (open = false)}>close</button>
	</form>
</dialog>
