<script>
  import { scrollTo as animatedScroll } from 'svelte-scrollto'
  import { isModalOpen } from 'utils/navbarModal'
  import Icon from '@components/Icon'
  import Link from '@components/Link'

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
    <div>
      <Icon name="hamburguer" on:click={toggleModal} />
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

<style src="styles.scss" lang="scss"></style>
