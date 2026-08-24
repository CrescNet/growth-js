<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import DateInput from '$lib/components/DateInput.svelte';
	import type { Measurement } from '$lib/types';
	import { age, bmi, sds } from '$lib/references';
	import { reference } from '$lib/reference.svelte';
	import { round } from '$lib/utils';

	let {
		value: measurements = $bindable(),
		birthDate,
		sex
	}: { value: Measurement[]; birthDate?: Date; sex?: string } = $props();
</script>

<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
	<table class="table">
		<thead>
			<tr>
				<th>{m.date()} | {m.age()}</th>
				<th>{m.height()} (cm)</th>
				<th>{m.weight()} (kg)</th>
				<th>{m.bmi()} (kg/m<sup>2</sup>)</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each measurements as measurement, i}
				{@const currentAge = age(birthDate, measurement.date)}
				{@const bmiValue = bmi(measurement.height, measurement.weight)}
				<tr>
					<td>
						<div class="join">
							<DateInput class="join-item" bind:value={measurement.date} />
							<span class="btn pointer-events-none join-item">{round(currentAge, 1)}</span>
						</div>
					</td>
					<td>
						<div class="join">
							<input type="number" class="input join-item" bind:value={measurement.height} />
							<span class="btn pointer-events-none join-item">
								{round(sds(currentAge, measurement.height, sex, 'height', reference.data), 2)}
							</span>
						</div>
					</td>
					<td>
						<div class="join">
							<input type="number" class="input join-item" bind:value={measurement.weight} />
							<span class="btn pointer-events-none join-item">
								{round(sds(currentAge, measurement.weight, sex, 'weight', reference.data), 2)}
							</span>
						</div>
					</td>
					<td>
						<div class="join">
							<div class="input join-item border border-dashed">
								{round(bmiValue, 1)}
							</div>
							<span class="btn pointer-events-none join-item">
								{round(sds(currentAge, bmiValue, sex, 'bmi', reference.data), 2)}
							</span>
						</div>
					</td>
					<td>
						<button
							class="btn text-error-content btn-error btn-sm"
							title={m.remove_measurement()}
							onclick={() => measurements.splice(i, 1)}>X</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="5">
					<button
						class="btn text-secondary-content btn-secondary"
						onclick={() => measurements.push({})}>+ {m.add_measurement()}</button
					>
				</td>
			</tr>
		</tfoot>
	</table>
</div>
