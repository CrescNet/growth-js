<script lang="ts">
	import { age, type Reference } from '$lib/references';
	import type { Measurement } from '$lib/types';
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
		ScatterController
	} from 'chart.js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		LineElement,
		CategoryScale,
		LinearScale,
		PointElement,
		ScatterController
	);

	let {
		measurements,
		reference,
		sex,
		birthDate,
		motherHeight,
		fatherHeight
	}: {
		measurements: Measurement[];
		reference?: Reference;
		sex?: String;
		birthDate?: Date;
		motherHeight?: Number;
		fatherHeight?: Number;
	} = $props();

	let data = $derived({
		datasets: [
			{
				label: 'Height',
				type: 'scatter',
				backgroundColor: 'black',
				data: measurements.map((m) => ({ x: age(birthDate, m.date), y: m.height }))
			}
		]
	});
	let options = {
		responsive: true,
		scales: {
			x: { min: 0, max: 18 },
			y: { min: 0 }
		}
	};
</script>

<Chart type="scatter" {data} {options} class="h-50 w-50" />
