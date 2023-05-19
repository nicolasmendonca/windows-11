<script lang="ts">
	import Edge from '../lib/apps/Edge.svelte';
	import MarsSoftwareSolutions from '../lib/apps/MarsSoftwareSolutions.svelte';
	let backgroundImage = '/img/Wallpaper/Windows/img19.jpg';

	export let desktopIcons: string[];
	export let openedApps: string[];
</script>

<main class="desktop" style="--wallpaper: url({backgroundImage})">
	{#each desktopIcons as desktopIcon}
		<button
			on:dblclick={() => {
				openedApps.push(desktopIcon);
				openedApps = openedApps;
			}}
			class="flex flex-col items-center justify-center gap-2 cursor-default focus:bg-blue-300 py-4"
		>
			<img src="/img/icon/{desktopIcon}.png" class="w-12 h-12" alt="" />
			<span class="text-xs text-center">{desktopIcon}</span>
		</button>
	{/each}
</main>

<div class="absolute">
	{#each openedApps as openedApp}
		{#if openedApp === 'Microsoft Edge'}
			<Edge
				on:close={() => {
					openedApps.splice(openedApps.indexOf(openedApp), 1);
					openedApps = openedApps;
				}}
			/>
		{/if}
		{#if openedApp === 'Mars Software Solutions'}
			<MarsSoftwareSolutions
				on:close={() => {
					openedApps.splice(openedApps.indexOf(openedApp), 1);
					openedApps = openedApps;
				}}
			/>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.desktop {
		background-image: var(--wallpaper);
		user-select: none;
		width: 100dvw;
		height: 100dvh;
		position: absolute;
		gap: 28px 1px;
		@apply transition-all absolute bg-fixed bg-center bg-cover flex-grow inset-0 grid grid-cols-[repeat(auto-fill,_74px)] grid-rows-[repeat(auto-fill,_90px)] grid-flow-col pt-[6px];
	}
</style>
