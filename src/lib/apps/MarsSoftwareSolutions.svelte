<script lang="ts">
	import AppWindowFrame from './AppWindowFrame.svelte';
</script>

<AppWindowFrame on:close title="Mars Software Solutions">
	<iframe
		class="flex-grow"
		title="VS Code"
		src="https://mendo-at-work.vercel.app/"
		frameborder="0"
	/>
</AppWindowFrame>
