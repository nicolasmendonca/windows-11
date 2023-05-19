<script lang="ts">
	import AppWindowFrame from './AppWindowFrame.svelte';
</script>

<AppWindowFrame on:close title="Windows 11 Source Code">
	<iframe
		class="flex-grow"
		title="VS Code"
		src="https://stackblitz.com/github/nicolasmendonca/windows-11"
		frameborder="0"
	/>
</AppWindowFrame>
