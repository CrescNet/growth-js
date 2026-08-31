<script lang="ts">
	import { locales, setLocale } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import packageInfo from '../../package.json';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col">
	<div class="navbar bg-primary text-primary-content shadow-sm">
		<div class="flex-1">
			<span class="text-xl">{packageInfo.productName}</span>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn gap-2 btn-ghost not-hover:text-primary-content">
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
						></path></svg
					>
					<span>Language</span>
					<svg class="h-4 w-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						></path></svg
					>
				</div>
				<ul
					class="menu dropdown-content z-1 rounded-box bg-base-200 p-2 text-base-content shadow-sm"
				>
					{#each locales as locale}
						<li>
							<button class="uppercase" onclick={() => setLocale(locale)}>{locale}</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="grow sm:p-2">
		{@render children()}
	</div>

	<footer class="footer items-center bg-base-300 p-4 text-base-content sm:footer-horizontal">
		<aside class="grid-flow-col items-center">
			<p>
				v{packageInfo.version} - Copyright © CrescNet, Medizinische Fakultät, Universität Leipzig {new Date().getFullYear()}
			</p>
		</aside>
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a href="https://crescnet.org/">CrescNet</a>
			<a href={packageInfo.homepage}>GitHub</a>
		</nav>
	</footer>
</div>
