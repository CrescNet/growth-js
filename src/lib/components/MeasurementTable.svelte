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

<div class="rounded-box border border-base-content/5 bg-base-100">
	<table class="w-full sm:table sm:table-fixed sm:table-xs sm:[&_td]:px-1 [&_th]:truncate">
		<thead class="hidden sm:table-header-group">
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
				<tr class="grid grid-flow-row grid-cols-2 gap-x-2 pb-3 sm:table-row sm:pb-0">
					<td class="block sm:table-cell">
						<label class="label sm:hidden" for={'date-' + i}>{m.date()}</label>
						<div class="join w-full">
							<DateInput
								class="join-item min-w-0 input-sm"
								id={'date-' + i}
								bind:value={measurement.date}
							/>
							<span
								class="btn pointer-events-none join-item w-10 justify-end truncate pr-1 pl-0 btn-sm"
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
						<td class="block sm:table-cell">
							<label class="label sm:hidden" for={measurementType + '-' + i}
								>{m[measurementType as keyof typeof m]()}</label
							>
							<div class="join w-full">
								<input
									type="number"
									id={measurementType + '-' + i}
									class="input join-item input-sm"
									bind:value={measurement[measurementType as keyof Measurement]}
								/>
								<span
									class={[
										'btn pointer-events-none join-item w-10 justify-end truncate pr-1 pl-0 btn-sm',
										sdsClass(sdsValue)
									]}
								>
									{round(sdsValue, 2)}
								</span>
							</div>
						</td>
					{/each}
					<td class="block sm:table-cell">
						<label class="label sm:hidden" for={'bmi-' + i}>{m.bmi()}</label>
						<div class="join w-full">
							<input
								type="number"
								id={'bmi-' + i}
								class="disabled input join-item border-dashed input-sm"
								readonly
								value={round(bmiValue, 1)}
							/>
							<span
								class={[
									'btn pointer-events-none join-item w-10 justify-end truncate pr-1 pl-0 btn-sm',
									sdsClass(bmiSds)
								]}
							>
								{round(bmiSds, 2)}
							</span>
						</div>
					</td>
					<td class="mt-1 block sm:mt-0 sm:table-cell">
						<button
							class="btn text-error-content btn-error btn-sm"
							title={m.remove_measurement()}
							onclick={() => measurements.splice(i, 1)}
							>X<span class="sm:hidden">{m.remove_measurement()}</span></button
						>
					</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="5">
					<button
						class="btn text-secondary-content btn-secondary btn-sm"
						onclick={() => measurements.push({})}>+ {m.add_measurement()}</button
					>
				</td>
			</tr>
		</tfoot>
	</table>
</div>
