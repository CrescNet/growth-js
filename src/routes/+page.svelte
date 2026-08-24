<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { type Measurement } from '$lib/types';
	import MeasurementTable from '$lib/components/MeasurementTable.svelte';
	import MasterDataInput from '$lib/components/MasterDataInput.svelte';
	import GrowthChart from '$lib/components/GrowthChart.svelte';
	import { reference } from '$lib/reference.svelte';

	let sex = $state<string>();
	let birthDate = $state<Date>();
	let motherHeight = $state<number>();
	let fatherHeight = $state<number>();
	let measurements = $state<Measurement[]>([{}]);
	let chartMeasurement = $state('height');
</script>

<div class="flex h-full flex-col lg:flex-row">
	<div class="flex flex-1 flex-col gap-3">
		<div class="card bg-base-100 shadow-sm card-sm card-border">
			<div class="card-body">
				<h2 class="card-title">{m.description()}</h2>
				<p>{m.app_description()}</p>
			</div>
			<div class="card-body">
				<h2 class="card-title">{m.privacy()}</h2>
				<p>{m.privacy_note()}</p>
			</div>
		</div>

		<div class="card bg-base-100 shadow-sm card-sm card-border">
			<div class="card-body flex flex-col">
				<MasterDataInput bind:sex bind:birthDate bind:motherHeight bind:fatherHeight />

				<div class="divider"></div>

				<MeasurementTable {birthDate} {sex} bind:value={measurements} />

				<div class="flex flex-row justify-center">
					<div class="join">
						<button class="btn join-item text-primary-content btn-primary">{m.export()}</button>
						<button class="btn join-item text-primary-content btn-primary">{m.import()}</button>
						<button class="btn join-item text-error-content btn-error">{m.reset()}</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="divider lg:divider-horizontal"></div>

	<div class="flex flex-1 flex-col items-center">
		<label class="tabs tabs-box">
			{#each ['height', 'weight', 'bmi'] as measurementType}
				<input
					type="radio"
					name="type"
					class="tab"
					aria-label={m[measurementType as keyof typeof m]()}
					value={measurementType}
					bind:group={chartMeasurement}
				/>
			{/each}
		</label>

		<GrowthChart
			measurementType={chartMeasurement}
			{measurements}
			reference={reference.data}
			{sex}
			{birthDate}
			{motherHeight}
			{fatherHeight}
		/>
	</div>
</div>
