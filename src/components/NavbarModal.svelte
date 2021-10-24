<script>
  import { scrollTo as animatedScroll } from 'svelte-scrollto'
  import { isModalOpen } from '@utils/navbarModal'
  import Icon from '@components/Icon.svelte'
  import Link from '@components/Link.svelte'

  function toggleModal() {
    isModalOpen.set(!$isModalOpen)
    if ($isModalOpen) document.body.style = 'overflow: hidden;'
    else document.body.style = null
  }

  function scrollTo(element, duration = 2000) {
    toggleModal()
    animatedScroll({ element, duration })
  }
</script>

{#if $isModalOpen}
  <div class="navbar-modal">
    <div class="container" on:click={toggleModal}>
      <Icon name="x" />
    </div>
    <nav>
      <ul>
        <li on:click={() => scrollTo('#about')}>Acerca</li>
        <li on:click={() => scrollTo('#projects')}>Proyectos</li>
        <li on:click={() => scrollTo('#contributors')}>Contribuidores</li>
      </ul>
      <div class="auth">
        <Link btn medium>Ingresar</Link>
        <Link>Regístrate</Link>
      </div>
    </nav>
  </div>
{/if}

<style lang="scss">
  @import 'src/styles/utils';

  .navbar-modal {
    display: grid;
    position: sticky;
    top: 0;
    grid-template-rows: fit-content(100%) auto;
    width: 100%;
    height: 100vh;
    color: white;
    background: $black;
    padding: $size-2xl $size-base;
    z-index: $z-100;

    .container {
      width: 100%;
      display: grid;
      justify-content: right;
      grid-template-rows: 32px;
      grid-template-columns: 32px;
    }

    nav {
      display: grid;
      gap: $size-3xl;
      align-content: center;

      ul {
        display: grid;
        gap: $size-3xl;
        text-align: center;
        justify-content: center;
        grid-template-columns: fit-content(100%);
        grid-template-rows: repeat(3, fit-content(100%));

        li {
          cursor: pointer;
          user-select: none;
        }
      }

      .auth {
        display: grid;
        gap: $size-3xl;
        text-align: center;
        align-items: center;
        justify-content: center;
        grid-template-columns: fit-content(100%);
        grid-template-rows: repeat(2, fit-content(100%));
      }
    }
  }
</style>
