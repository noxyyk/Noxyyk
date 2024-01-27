<script lang="ts">
    import "../app.css";
    import { invalidate } from '$app/navigation';
</script>

<svelte:head>
	<title>Noxyyk</title>
</svelte:head>

{#if typeof window  !== 'undefined'}
<slot />
{/if}
