<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Measurement } from '$lib/types';
	import { saveToFile } from '$lib/utils';

	let {
		open = $bindable(false),
		referenceId,
		sex,
		birthDate,
		fatherHeight,
		motherHeight,
		measurements
	}: {
		open: boolean;
		referenceId?: string;
		sex?: string;
		birthDate?: Date;
		fatherHeight?: number;
		motherHeight?: number;
		measurements: Measurement[];
	} = $props();

	let dialogRef = $state<HTMLDialogElement>();
	let showQrCode = $state(false);

	$effect(() => {
		if (open) {
			dialogRef?.showModal();
		} else {
			dialogRef?.close();
		}
	});

	function doFileExport() {
		saveToFile(
			JSON.stringify({
				referenceId,
				sex,
				birthDate,
				motherHeight,
				fatherHeight,
				measurements
			}),
			'data_' + new Date().toISOString() + '.json'
		);
	}
</script>

<dialog bind:this={dialogRef} class="modal" onclose={() => (open = false)}>
	<div class="modal-box">
		<form method="dialog">
			<button class="btn absolute top-2 right-2 btn-circle btn-ghost" onclick={() => (open = false)}
				>x</button
			>
		</form>
		<h3 class="text-lg font-bold">{m.export()}</h3>

		<div class="divider my-0"></div>

		<p>{m.export_description()}</p>

		<div class="mt-3 grid grid-cols-3 items-center gap-x-5 gap-y-2">
			<button class="btn text-primary-content btn-primary" onclick={doFileExport}
				>{m.save_to_file()}</button
			>
			<p class="col-span-2 text-sm">{m.save_to_file_description()}</p>

			<button class="btn text-primary-content btn-primary" onclick={() => (showQrCode = true)}
				>{m.show_qr()}</button
			>
			<p class="col-span-2 text-sm">{m.show_qr_description()}</p>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button onclick={() => (open = false)}>close</button>
	</form>
</dialog>
