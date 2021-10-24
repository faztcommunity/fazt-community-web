<script>
  import '../styles/main.scss'
  import Navbar from '@components/Navbar.svelte'
  import Footer from '@components/Footer.svelte'
  import NavbarModal from '@components/NavbarModal.svelte'
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
