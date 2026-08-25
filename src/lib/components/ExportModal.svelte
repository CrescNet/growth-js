<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Measurement } from '$lib/types';
	import { saveToFile } from '$lib/utils';
	import QRCode from 'qrcode';

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
	let qrSize = $derived(Math.sqrt(measurements.length ?? 1) * 100);
	let qrDataUrl = $state<string>();

	$effect(() => {
		if (open) {
			dialogRef?.showModal();
		} else {
			dialogRef?.close();
			showQrCode = false;
		}
	});

	$effect(() => {
		QRCode.toDataURL(
			JSON.stringify({ referenceId, sex, birthDate, motherHeight, fatherHeight, measurements }),
			{ width: qrSize, margin: 2 }
		)
			.then((url) => (qrDataUrl = url))
			.catch((e) => console.log(e));
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

			<button
				class="btn text-primary-content btn-primary"
				onclick={() => (showQrCode = !showQrCode)}>{m.show_qr()}</button
			>
			<p class="col-span-2 text-sm">{m.show_qr_description()}</p>
		</div>

		{#if qrDataUrl && showQrCode}
			<img src={qrDataUrl} class="mx-auto block" alt={m.qr_code()} />
		{/if}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button onclick={() => (open = false)}>close</button>
	</form>
</dialog>
