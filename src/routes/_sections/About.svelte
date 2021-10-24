<script>
  import CommunityImage from '@components/CommunityImage.svelte'
</script>

<section id="about">
  <div class="container">
    <h2 class="subtitle">Conoce nuestra comunidad</h2>
    <div>
      <article class="top">
        <CommunityImage src="community_left.webp" orange right />
        <p class="text">
          Fazt Community es un espacio donde podrás crecer como profesional,
          participando en equipos y con personas de todo el mundo hispano
          hablante.
        </p>
      </article>
      <article class="bottom">
        <CommunityImage src="community_right.webp" blue left />
        <p class="text">
          No importa tu nivel, podrás encontrar un área donde unirte, aportar de
          tu conocimiento con otros, recibir ayuda y vas a conocer gente que
          comparten la misma pasión que tú.
        </p>
      </article>
    </div>
  </div>
</section>

<style lang="scss">
  @import 'src/styles/utils';

  section {
    padding-top: $size-6xl;
    padding-bottom: $size-6xl;

    .container {
      display: grid;
      gap: $size-3xl;

      div {
        display: grid;
        gap: $size-3xl;
        grid-template-rows: repeat(3, fit-content(100%));

        article {
          display: grid;
          gap: $size-3xl;
          justify-items: center;
          grid-template-rows: repeat(2, fit-content(100%));
        }
      }
    }
  }

  @include media(lg) {
    section {
      .container {
        gap: $size-5xl;

        div {
          gap: $size-8xl;

          article {
            gap: $size-6xl;
            justify-items: left;
          }
        }
      }
    }
  }

  @include media(xl) {
    section {
      .container {
        gap: $size-8xl;

        div {
          gap: 10rem;

          article {
            gap: $size-8xl;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: fit-content(100%);
          }

          .bottom {
            grid-template-areas: 'text image';

            & > :nth-child(1) {
              grid-area: image;
            }

            & > :nth-child(2) {
              grid-area: text;
            }
          }
        }
      }
    }
  }
</style>
