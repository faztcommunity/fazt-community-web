<script>
  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
  <title>Error {status}</title>
</svelte:head>

<section class="error">
  <h1>{status}</h1>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</section>

<style lang="scss">
  @import 'src/styles/utils';

  section {
    min-height: calc(100vh - 230px);
    display: grid;
    place-items: center;

    h1 {
      font-size: 10rem;
    }
  }

  @include media(lg) {
    section {
      min-height: calc(100vh - 158px);
    }
  }
</style>
