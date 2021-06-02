<script>
    import ProjectCard from '@components/ProjectCard'
    import CircuitBackground from '@components/CircuitBackground'
</script>

<section id="projects">
    <CircuitBackground />
    <div class="container">
        <article class="message">
            <h2 class="subtitle white">Proyectos de la comunidad</h2>
            <p class="text white">
                En la comunidad podrás encontrar distintos proyectos para
                colaborar en diferentes tecnologias. Tenemos 4 proyectos
                principales que son:
            </p>
        </article>
        <article class="grid-projects">
            <ProjectCard
                icon="web"
                title="Fazt Web"
                label="Repositorio de Fazt Web"
                link="https://github.com/faztcommunity/fazt-oficial-web"
                desc="Es la web oficial de Fazt Community donde se colocan los proyectos y aportes de los integrandes de la comunidad." />
            <ProjectCard
                icon="api"
                title="Fazt Api"
                label="Repositorio de Fazt Api"
                link="https://github.com/faztcommunity/fazt-api"
                desc="Es el núcleo de los proyectos principales, este proyecto se encargará de unificar la base de datos con los demás proyectos." />
            <ProjectCard
                icon="bot"
                title="Fazt Bot"
                label="Repositorio de Fazt Bot"
                link="https://github.com/faztcommunity/fazt-bot"
                desc="Un bot para Discord multipropósito capaz de realizar distintas actividades como saludos, reproducir música y mucho más." />
            <ProjectCard
                icon="database"
                title="Fazt Database"
                label="Repositorio de Fazt Database"
                link="https://github.com/faztcommunity/fazt-methodology-core"
                desc="Analizamos distintos ámbitos de los proyectos comunitarios, para poder guardar todos los registros y/o datos." />
        </article>
    </div>
</section>

<style lang="scss">
    @import 'src/styles/utils';

    section {
        padding-top: $size-7xl;
        padding-bottom: $size-7xl;
        background: $color-secondary-light;

        .container {
            display: grid;
            position: relative;
            gap: $size-4xl;
            grid-template-rows: repeat(2, fit-content(100%));
            z-index: $z-10;

            .message {
                display: grid;
                gap: $size-base;
                max-width: 696px;
                justify-self: center;
            }

            .grid-projects {
                display: grid;
                gap: $size-3xl;
                justify-content: center;
                grid-template-rows: repeat(4, fit-content(100%));
            }
        }
    }

    @include media(lg) {
        section {
            padding-top: 9.75rem;
            padding-bottom: 9.75rem;

            .container {
                .message {
                    h2,
                    p {
                        text-align: center;
                    }
                }

                .grid-projects {
                    grid-template-rows: repeat(2, fit-content(100%));
                    grid-template-columns: repeat(2, fit-content(100%));
                }
            }
        }
    }
</style>
