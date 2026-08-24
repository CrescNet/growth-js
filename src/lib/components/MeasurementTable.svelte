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

	function sdsClass(value?: number) {
		if (value === undefined) return undefined;
		if (Math.abs(value) >= 1.881) return 'text-error';
		if (Math.abs(value) >= 1.644) return 'text-warning';
		return 'text-positive';
	}
</script>

<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
	<table class="table w-full table-fixed table-xs [&_td]:px-1">
		<thead>
			<tr>
				<th class="w-1/4">{m.date()} | {m.age()}</th>
				<th class="w-1/4">{m.height()} (cm) | SDS</th>
				<th class="w-1/4">{m.weight()} (kg) | SDS</th>
				<th class="w-1/4">{m.bmi()} (kg/m<sup>2</sup>) | SDS</th>
				<th class="w-11"></th>
			</tr>
		</thead>
		<tbody>
			{#each measurements as measurement, i}
				{@const currentAge = age(birthDate, measurement.date)}
				{@const bmiValue = bmi(measurement.height, measurement.weight)}
				{@const bmiSds = sds(currentAge, bmiValue, sex, 'bmi', reference.data)}
				<tr>
					<td>
						<div class="join w-full">
							<DateInput class="join-item" bind:value={measurement.date} />
							<span class="btn pointer-events-none join-item w-10 justify-end truncate pr-0.5 pl-0"
								>{round(currentAge, 1)}</span
							>
						</div>
					</td>
					{#each ['height', 'weight'] as measurementType}
						{@const sdsValue = sds(
							currentAge,
							measurement[measurementType as keyof Measurement] as number | undefined,
							sex,
							measurementType,
							reference.data
						)}
						<td>
							<div class="join">
								<input
									type="number"
									class="input join-item"
									bind:value={measurement[measurementType as keyof Measurement]}
								/>
								<span
									class={[
										'btn pointer-events-none join-item w-10 justify-end truncate pr-0.5 pl-0',
										sdsClass(sdsValue)
									]}
								>
									{round(sdsValue, 2)}
								</span>
							</div>
						</td>
					{/each}
					<td>
						<div class="join">
							<input
								type="number"
								class="disabled input join-item border-dashed"
								readonly
								value={round(bmiValue, 1)}
							/>
							<span
								class={[
									'btn pointer-events-none join-item w-10 justify-end truncate pr-0.5 pl-0',
									sdsClass(bmiSds)
								]}
							>
								{round(bmiSds, 2)}
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
