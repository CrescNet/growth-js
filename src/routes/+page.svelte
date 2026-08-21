<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import DateInput from '$lib/components/DateInput.svelte';
	import { age, bmi, type Reference } from '$lib/references';

	interface Measurement {
		date?: Date;
		height?: number;
		weight?: number;
	}

	const references: Reference[] = [];
	let selectedReference = $state<Reference>();
	let sex = $state<String>();
	let birthDate = $state<Date>();
	let motherHeight = $state<Number>();
	let fatherHeight = $state<Number>();
	let measurements = $state<Measurement[]>([{}]);
</script>

<div class="flex w-full flex-col lg:flex-row">
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
				<div class="grid grid-flow-row grid-cols-3 gap-3">
					<div class="flex flex-col">
						<label class="label" for="reference">{m.reference()}</label>
						<select class="select" id="reference" bind:value={selectedReference}>
							<option disabled selected>{m.pick_reference()}</option>
							{#each references as reference}
								<option value={reference}>
									{reference.title}
								</option>
							{/each}
						</select>
						{#if selectedReference?.source}
							<p class="label">
								{m.source()}:
								{selectedReference.source}
							</p>
						{/if}
					</div>

					<div class="flex flex-col">
						<label class="label" for="sex">{m.sex()}</label>
						<select class="select" id="sex" bind:value={sex}>
							<option disabled selected>{m.pick_sex()}</option>
							<option value="female">{m.female()}</option>
							<option value="male">{m.male()}</option>
							<option value="diverse">{m.diverse()}</option>
						</select>
					</div>

					<div class="flex flex-col">
						<label class="label" for="birth-date">{m.birth_date()}</label>
						<DateInput bind:value={birthDate} />
					</div>

					<div class="flex flex-col">
						<label class="label" for="mother-height"
							><i>{m.optional()}:</i>{m.mother_height()}</label
						>
						<input type="number" id="mother-height" class="input" bind:value={motherHeight} />
						<p class="label">{m.in_cm()}</p>
					</div>

					<div class="flex flex-col">
						<label class="label" for="father-height"
							><i>{m.optional()}:</i>{m.father_height()}</label
						>
						<input type="number" id="father-height" class="input" bind:value={fatherHeight} />
						<p class="label">{m.in_cm()}</p>
					</div>
				</div>

				<div class="divider"></div>

				<div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
					<table class="table">
						<thead>
							<tr>
								<th>{m.date()}</th>
								<th>{m.height()} (cm)</th>
								<th>{m.weight()} (kg)</th>
								<th>{m.bmi()} (kg/m<sup>2</sup>)</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each measurements as measurement, i}
								<tr>
									<td title={m.age({ years: age(measurement.date, birthDate) ?? '' })}
										><DateInput bind:value={measurement.date} /></td
									>
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

	<div class="dock flex flex-1">
		<button><span class="dock-label">{m.height()}</span></button>
		<button><span class="dock-label">{m.weight()}</span></button>
		<button><span class="dock-label">{m.bmi()}</span></button>

		<div class="h-100 w-full skeleton"></div>
	</div>
</div>
