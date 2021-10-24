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

  function scrollTo(element, duration = 1500, offset = -90) {
    animatedScroll({ element, duration, offset })
  }
</script>

<header id="navbar">
  <div class="container">
    <div>
      <Link>
        <Icon name="logo" />
      </Link>
    </div>
    <div on:click={toggleModal}>
      <Icon name="hamburguer" />
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
</header>

<style lang="scss">
  @use 'sass:map';
  @import 'src/styles/utils';

  header {
    width: 100%;
    position: sticky;
    top: 0;
    padding-top: $size-xl;
    padding-bottom: $size-xl;
    background: white;
    box-shadow: map.get($shadow-black, lv1);
    z-index: $z-50;

    .container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;

      & > :nth-child(1) {
        display: grid;
        grid-template-rows: 40px;
        grid-template-columns: 40px;
      }

      & > :nth-child(2) {
        display: grid;
        justify-content: right;
        grid-template-rows: 32px;
        grid-template-columns: 32px;
      }

      nav {
        display: none;
      }
    }
  }

  @include media(lg) {
    header {
      .container {
        & > :nth-child(1) {
          grid-template-rows: 50px;
          grid-template-columns: 50px;
        }

        & > :nth-child(2) {
          display: none;
        }

        nav {
          display: grid;
          gap: $size-3xl;
          align-items: center;
          justify-content: right;
          color: map.get($gray, 200);
          grid-template-columns: repeat(2, fit-content(100%));

          ul {
            display: grid;
            gap: $size-3xl;
            grid-template-columns: repeat(3, fit-content(100%));

            li {
              cursor: pointer;
              user-select: none;
            }
          }

          .auth {
            display: grid;
            gap: $size-3xl;
            align-items: center;
            grid-template-columns: repeat(2, fit-content(100%));
          }
        }
      }
    }
  }
</style>
