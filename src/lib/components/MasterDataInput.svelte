<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import DateInput from './DateInput.svelte';
	import {
		availableReferences,
		getTargetHeight,
		getTargetHeightSds,
		reference
	} from '$lib/reference.svelte';
	import type { ReferenceDeclaration } from '$lib/types';
	import { round } from '$lib/utils';

	let {
		sex = $bindable(),
		birthDate = $bindable(),
		motherHeight = $bindable(),
		fatherHeight = $bindable()
	}: {
		sex?: string;
		birthDate?: Date;
		motherHeight?: number;
		fatherHeight?: number;
	} = $props();

	const references: ReferenceDeclaration[] = availableReferences;

	const target = $derived(round(getTargetHeight(sex, fatherHeight, motherHeight)));
	const targetSds = $derived(round(getTargetHeightSds(fatherHeight, motherHeight), 2));
</script>

<div class="grid grid-flow-row grid-cols-2 gap-x-2 sm:grid-cols-3 sm:gap-3">
	<div class="flex flex-col">
		<label class="label" for="reference">{m.reference()}</label>
		<select class="select" id="reference" bind:value={reference.declaration}>
			<option disabled selected value={undefined}>{m.pick_reference()}</option>
			{#each references as reference}
				<option value={reference}>
					{reference.label}
				</option>
			{/each}
		</select>
		<p class={['label', !reference.declaration?.authors && 'invisible']}>
			{m.source()}:
			<a href={reference.declaration?.url} class="link truncate link-hover" target="_blank">
				{reference.declaration?.authors}
			</a>
		</p>
	</div>

	<div class="flex flex-col">
		<label class="label" for="sex">{m.sex()}</label>
		<select class="select" id="sex" bind:value={sex}>
			<option disabled selected value={undefined}>{m.pick_sex()}</option>
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
		<label class="label" for="mother-height">{m.mother_height()}</label>
		<input type="number" id="mother-height" class="input" bind:value={motherHeight} />
		<p class="label">{m.in_cm()}, {m.optional()}</p>
	</div>

	<div class="flex flex-col">
		<label class="label" for="father-height">{m.father_height()}</label>
		<input type="number" id="father-height" class="input" bind:value={fatherHeight} />
		<p class="label">{m.in_cm()}, {m.optional()}</p>
	</div>

	{#if target !== undefined}
		<div class="flex flex-col" title={m.target_height_description()}>
			<div class="label">{m.target_height()}</div>
			<strong class="input border-0 pl-0">
				{target} cm
				{#if targetSds !== undefined}
					({targetSds} SDS)
				{/if}
			</strong>
		</div>
	{/if}
</div>
