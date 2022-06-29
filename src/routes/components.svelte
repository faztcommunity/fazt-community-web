<script>
  import Icon from '@components/Icon'
  import Image from '@components/Image'
  import Button from '@components/Button'
  import MapGrid from '@components/MapGrid'
  import ProjectCard from '@components/ProjectCard'
  import CommunityImage from '@components/CommunityImage'
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
      participando en equipos y con personas de todo el mundo hispano hablante.
    </p>
    <p class="text">
      No importa tu nivel, podrás encontrar un área donde unirte, aportar de tu
      conocimiento con otros, recibir ayuda y vas a conocer gente que comparten
      la misma pasión que tú.
    </p>
  </article>
  <article class="container">
    <CommunityImage src="community_left.png" blue left />
    <CommunityImage src="community_right.png" orange right />
  </article>
  <article class="container projects">
    <ProjectCard
      icon="web"
      title="Fazt Web"
      desc="Es la web oficial de Fazt Community donde se colocan los proyectos y aportes de los integrandes de la comunidad."
    />
    <ProjectCard
      icon="api"
      title="Fazt Api"
      desc="Es el núcleo de los proyectos principales, este proyecto se encargará de unificar la base de datos con los demás proyectos."
    />
    <ProjectCard
      icon="bot"
      title="Fazt Bot"
      desc="Un bot para Discord multipropósito capaz de realizar distintas actividades como saludos, reproducir música y mucho más."
    />
    <ProjectCard
      icon="database"
      title="Fazt Database"
      desc="Analizamos distintos ámbitos de los proyectos comunitarios, para poder guardar todos los registros y/o datos."
    />
  </article>
  <article>
    <MapGrid />
  </article>
</section>

<style lang="scss">
  @import 'src/styles/utils';

  section {
    width: 100%;
    height: 100%;
  }

  .container {
    display: grid;
    gap: 4rem;
    padding-bottom: $size-6xl;
    grid-template-rows: repeat(4, fit-content(100%));

    &.projects {
      gap: $size-3xl;
      grid-template-columns: fit-content(100%);
    }
  }
</style>
