<script>
    import Navbar from '@components/Navbar'
</script>

<Navbar />
<main>
    <slot />
</main>

<style lang="scss">
    @import 'src/styles/utils';

    main {
        background: $white;
        min-height: calc(100vh - 90px);
    }
</style>
