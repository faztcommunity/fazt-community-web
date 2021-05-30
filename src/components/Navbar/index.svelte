<script>
    import { scrollTo as animatedScroll } from 'svelte-scrollto'
    import Icon from '@components/Icon'
    import Link from '@components/Link'

    let openModal = false

    function toggleModal() {
        openModal = !openModal
        if (openModal) document.body.style = 'overflow: hidden;'
        else document.body.style = null
    }

    function scrollTo(element, duration = 1500, delay = 0) {
        animatedScroll({ element, duration, delay })
    }
</script>

{#if openModal}
    <div class="navbar-modal">
        <div>
            <Icon name="x" on:click={toggleModal} />
        </div>
        <nav>
            <ul>
                <li on:click={() => scrollTo('#about')}>Acerca</li>
                <li on:click={() => scrollTo('#projects')}>Proyectos</li>
                <li on:click={() => scrollTo('#contributors')}>
                    Contribuidores
                </li>
            </ul>
            <div class="auth">
                <Link btn medium>Ingresar</Link>
                <Link>Regístrate</Link>
            </div>
        </nav>
    </div>
{/if}

<header id="navbar">
    <div class="container">
        <div>
            <Icon name="logo" />
        </div>
        <div>
            <Icon name="hamburguer" on:click={toggleModal} />
        </div>
        <nav>
            <ul>
                <li on:click={() => scrollTo('#about')}>Acerca</li>
                <li on:click={() => scrollTo('#projects')}>Proyectos</li>
                <li on:click={() => scrollTo('#contributors')}>
                    Contribuidores
                </li>
            </ul>
            <div class="auth">
                <Link btn medium>Ingresar</Link>
                <Link>Regístrate</Link>
            </div>
        </nav>
    </div>
</header>

<style src="styles.scss" lang="scss"></style>
