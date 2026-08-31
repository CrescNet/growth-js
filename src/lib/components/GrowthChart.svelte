<script lang="ts">
	import { age, bmi, rawFromLms } from '$lib/references';
	import type { Measurement, ReferenceData, ReferenceDataRow, SexReferenceData } from '$lib/types';
	import { Chart } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		CategoryScale,
		LinearScale,
		PointElement,
		ScatterController,
		LineController
	} from 'chart.js';
	import { m } from '$lib/paraglide/messages';
	import { getTargetHeightSds } from '$lib/reference.svelte';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		CategoryScale,
		LinearScale,
		PointElement,
		ScatterController,
		LineController
	);

	let {
		measurementType,
		measurements,
		reference,
		sex,
		birthDate,
		motherHeight,
		fatherHeight,
		targetColor = '#3d9970'
	}: {
		measurementType: string;
		measurements: Measurement[];
		reference?: ReferenceData;
		sex?: string;
		birthDate?: Date;
		motherHeight?: number;
		fatherHeight?: number;
		targetColor?: string;
	} = $props();

	let measurementData = $derived(
		measurements.map((m) => ({
			x: age(birthDate, m.date),
			y:
				measurementType === 'bmi'
					? bmi(m.height, m.weight)
					: (m[measurementType as keyof Measurement] as number)
		}))
	);
	let centileData = $derived(
		!sex
			? []
			: (reference?.[measurementType as keyof ReferenceData]?.[sex as keyof SexReferenceData] ?? [])
	);

	let targetSds = $derived(getTargetHeightSds(fatherHeight, motherHeight));
	let color = $derived(sex === 'female' ? '#f392a3' : sex === 'male' ? '#2086e8' : 'black');
	let minAge = $state(0);
	let maxAge = $state(18);

	let data = $derived({
		datasets: [
			{
				label: m[measurementType as keyof typeof m](),
				type: 'scatter',
				backgroundColor: color,
				data: measurementData
			},
			{
				label: m.parental_estimated_value(),
				type: 'line',
				data:
					targetSds === undefined
						? []
						: centileData?.map((c) => ({
								x: c.age,
								y: rawFromLms(targetSds, c.l ?? 1, c.m, c.s)
							})),
				borderColor: targetColor,
				borderWidth: 2,
				pointHitRadius: 0,
				pointRadius: 0
			},
			...['p03', 'p50', 'p97'].map((p) => ({
				label: p,
				type: 'line',
				data: centileData.map((c) => ({ x: c.age, y: c[p as keyof ReferenceDataRow] })),
				borderColor: 'black',
				borderWidth: 1,
				borderDash: p === 'p50' ? [5] : undefined,
				pointHitRadius: 0,
				pointRadius: 0
			}))
		],
		options: {
			elements: {
				line: {
					fill: false
				}
			}
		}
	});
	let options = $derived({
		responsive: true,
		maintainAspectRatio: true,
		scales: {
			x: { min: minAge, max: maxAge }
		}
	});
</script>

<Chart
	type="scatter"
	{data}
	{options}
	updateMode="none"
	class="h-50 w-50"
	height={80}
	width={100}
/>

<div class="card card-sm">
	<div class="card-body grid grid-flow-row grid-cols-2 gap-2 sm:gap-3">
		<div class="flex flex-col">
			<label class="label" for="min-age">{m.min_age()}</label>
			<input type="number" class="input input-sm" id="min-age" bind:value={minAge} />
			<p class="label">{m.in_years()}</p>
		</div>

		<div class="flex flex-col">
			<label class="label" for="max-age">{m.max_age()}</label>
			<input type="number" class="input input-sm" id="max-age" bind:value={maxAge} />
			<p class="label">{m.in_years()}</p>
		</div>
	</div>
</div>

<div class="card bg-base-100 shadow-sm card-sm sm:card-border">
	<div class="card-body p-1 sm:p-3">
		<h2 class="card-title">{m.description()}</h2>
		<p>{m.percentile_description()}</p>
		<p>{m.parental_estimation_description()}</p>
	</div>
</div>
