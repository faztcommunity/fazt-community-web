<script>
  import Navbar from '@components/Navbar'
  import Footer from '@components/Footer'
  import NavbarModal from '@components/NavbarModal'
</script>

<NavbarModal />
<Navbar />
<main>
  <slot />
</main>
<Footer />

<style lang="scss">
  @import 'src/styles/utils';

  main {
    background: $white;
    min-height: calc(100vh - 230px);
  }

  @include media(lg) {
    main {
      min-height: calc(100vh - 158px);
    }
  }
</style>
