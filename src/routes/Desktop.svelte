<script lang="ts">
	let backgroundImage = '/img/Wallpaper/Windows/img19.jpg';

	export let desktopIcons: string[];
	export let openedApps: string[];

	let isSelecting = false;
	let initialX = 0;
	let initialY = 0;
	let targetX = 0;
	let targetY = 0;
</script>

<main
	class="desktop"
	style="--wallpaper: url({backgroundImage})"
	on:mousedown={(event) => {
		isSelecting = true;
		initialX = event.clientX;
		initialY = event.clientY;
		targetX = event.clientX;
		targetY = event.clientY;
	}}
	on:mouseup={() => {
		isSelecting = false;
	}}
	on:mousemove={(event) => {
		if (isSelecting) {
			targetX = event.clientX;
			targetY = event.clientY;
		}
	}}
>
	{#if isSelecting}
		<div
			class="bg-blue-500 bg-opacity-60 border border-blue-500 fixed pointer-events-none"
			style="
      width: {Math.abs(initialX - targetX)}px;
      height: {Math.abs(initialY - targetY)}px;
      left: {Math.min(initialX, targetX)}px;
      top: {Math.min(initialY, targetY)}px;
    "
		/>
	{/if}
	{#each desktopIcons as desktopIcon}
		<button
			on:dblclick={() => {
				openedApps.push(desktopIcon);
				openedApps = openedApps;
			}}
			class="flex flex-col items-center justify-center gap-2 cursor-default focus:bg-blue-500 focus:bg-opacity-50 max-h-32 h-fit py-4"
		>
			<img src="/img/icon/{desktopIcon}.png" class="w-12 h-12" alt="" />
			<span class="text-xs text-center">{desktopIcon}</span>
		</button>
	{/each}
</main>

<div class="absolute">
	{#each openedApps as openedApp}
		{#if openedApp === 'Mars Software Solutions'}
			{#await import('../lib/apps/MarsSoftwareSolutions.svelte') then { default: MarsSoftwareSolutions }}
				<MarsSoftwareSolutions
					on:close={() => {
						openedApps.splice(openedApps.indexOf(openedApp), 1);
						openedApps = openedApps;
					}}
				/>
			{/await}
		{/if}
		{#if openedApp === 'Windows 11'}
			{#await import('../lib/apps/Windows11.svelte') then { default: Windows11 }}
				<Windows11
					on:close={() => {
						openedApps.splice(openedApps.indexOf(openedApp), 1);
						openedApps = openedApps;
					}}
				/>
			{/await}
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
		@apply p-4 transition-all absolute bg-fixed bg-center bg-cover flex-grow inset-0 grid grid-cols-[repeat(auto-fill,_74px)] grid-rows-[repeat(auto-fill,_90px)] grid-flow-col gap-8;
	}
</style>
