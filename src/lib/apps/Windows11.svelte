<script lang="ts">
	import AppWindowFrame from './AppWindowFrame.svelte';
</script>

<AppWindowFrame on:close title="Microsoft Edge">
	<iframe class="flex-grow" title="VS Code" src="https://www.google.com/?igu=1" frameborder="0" />
</AppWindowFrame>
