<script>
    export let status
    export let error

    const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
    <title>Error {status}</title>
</svelte:head>

<h1>{status}</h1>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}

<style>
    h1 {
        font-size: 10rem;
    }
</style>
