<script>
    import Navbar from '@components/Navbar'
    import Footer from '@components/Footer'
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />

<style lang="scss">
    @import 'src/styles/utils';

    main {
        background: $white;
        min-height: calc(100vh - 90px);
    }
</style>
