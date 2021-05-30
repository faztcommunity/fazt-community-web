<script>
    import Icon from '@components/Icon'
    import Image from '@components/Image'
    import Button from '@components/Button'
</script>

<section>
    <article>
        <Button fill primary large>Unirme a la comunidad</Button>
        <Button fill large>Ver proyectos</Button>
        <br /><br />
        <Button primary large>Unirme a la comunidad</Button>
        <Button large>Ver proyectos</Button>
        <br /><br />
        <Button fill primary large disabled>Unirme a la comunidad</Button>
        <Button fill large disabled>Ver proyectos</Button>
        <br /><br />
        <Button primary large disabled>Unirme a la comunidad</Button>
        <Button large disabled>Ver proyectos</Button>
    </article>
    <article>
        <Icon />
        <Icon name="api" size="32" />
        <Icon name="bot" size="32" />
        <Icon name="eye" size="32" />
        <Icon name="web" size="32" />
        <Icon name="logo" size="32" />
        <Icon name="check" size="32" />
        <Icon name="cross" size="32" />
        <Icon name="error" size="32" />
        <Icon name="github" size="32" />
        <Icon name="discord" size="32" />
        <Icon name="success" size="32" />
        <Icon name="warning" size="32" />
        <Icon name="database" size="32" />
        <Icon name="eyeclose" size="32" />
    </article>
    <article>
        <Image src="community_left.png" rounded />
        <Image src="community_right.png" rounded />
        <Image />
    </article>
    <article class="container">
        <h1 class="title">Somos Fazt Community</h1>
        <h3 class="subtitle">Conoce a nuestra comunidad</h3>
        <p class="text">
            Fazt Community es un espacio donde podrás crecer como profesional,
            participando en equipos y con personas de todo el mundo hispano
            hablante.
        </p>
        <p class="text">
            No importa tu nivel, podrás encontrar un área donde unirte, aportar
            de tu conocimiento con otros, recibir ayuda y vas a conocer gente
            que comparten la misma pasión que tú.
        </p>
    </article>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
    }
</style>
