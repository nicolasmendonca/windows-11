<script lang="ts">
	import type { PageData } from './$types';
	import Desktop from './Desktop.svelte';
	import TaskBar from './TaskBar.svelte';

	export let data: PageData;
</script>

<div class="relative">
	<Desktop desktopIcons={data.desktopIcons} openedApps={data.openedApps} />
	<TaskBar />
</div>
