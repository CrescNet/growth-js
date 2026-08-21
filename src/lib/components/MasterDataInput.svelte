<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Reference } from '$lib/references';
	import DateInput from './DateInput.svelte';

	let {
		reference: selectedReference = $bindable(),
		sex = $bindable(),
		birthDate = $bindable(),
		motherHeight = $bindable(),
		fatherHeight = $bindable()
	}: {
		reference?: Reference;
		sex?: String;
		birthDate?: Date;
		motherHeight?: Number;
		fatherHeight?: Number;
	} = $props();

	const references: Reference[] = [];
</script>

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
		<label class="label" for="mother-height"><i>{m.optional()}:</i>{m.mother_height()}</label>
		<input type="number" id="mother-height" class="input" bind:value={motherHeight} />
		<p class="label">{m.in_cm()}</p>
	</div>

	<div class="flex flex-col">
		<label class="label" for="father-height"><i>{m.optional()}:</i>{m.father_height()}</label>
		<input type="number" id="father-height" class="input" bind:value={fatherHeight} />
		<p class="label">{m.in_cm()}</p>
	</div>
</div>
