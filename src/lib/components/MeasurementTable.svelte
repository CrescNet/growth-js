<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import DateInput from '$lib/components/DateInput.svelte';
	import type { Measurement } from '$lib/types';
	import { age, bmi } from '$lib/references';

	let { value: measurements = $bindable(), birthDate }: { value: Measurement[]; birthDate?: Date } =
		$props();
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
				<tr>
					<td>
						<div class="join">
							<DateInput class="join-item" bind:value={measurement.date} />
							<span class="btn pointer-events-none join-item"
								>{age(birthDate, measurement.date)}</span
							>
						</div>
					</td>
					<td><input type="number" class="input" bind:value={measurement.height} /></td>
					<td><input type="number" class="input" bind:value={measurement.weight} /></td>
					<td
						><input
							type="number"
							class="input"
							disabled
							value={bmi(measurement.height, measurement.weight)}
						/></td
					>
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
