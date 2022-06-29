<script>
  import Button from '@components/Button'
  import MapGrid from '@components/MapGrid'
</script>

<section id="contributors">
  <div class="container">
    <h2 class="subtitle">Ellos son parte de nuestra comunidad</h2>
    <article class="map-community">
      <MapGrid />
    </article>
    <article class="message">
      <p class="text">
        En los proyectos de la comunidad hay personas del todo el mundo que
        aporta su tiempo, conocimiento y experiencia con los demás.
      </p>
      <Button primary fill large>Conócelos a todos</Button>
    </article>
  </div>
</section>

<style lang="scss">
  @import 'src/styles/utils';

  section {
    padding-top: $size-7xl;
    padding-bottom: $size-7xl;

    .container {
      display: grid;
      gap: $size-2xl;
      justify-items: center;
      grid-template-columns: fit-content(100%);
      grid-template-rows: repeat(3, fit-content(100%));

      .subtitle {
        margin-bottom: $size-2xl;
      }

      .message {
        display: grid;
        gap: $size-2xl;
        justify-items: center;
      }
    }
  }

  @include media(lg) {
    section {
      .container {
        .subtitle {
          text-align: center;
        }

        .message {
          .text {
            text-align: center;
          }
        }
      }
    }
  }

  @include media(xl) {
    section {
      padding-top: 7.5rem;
      padding-bottom: $size-5xl;

      .container {
        column-gap: $size-7xl;
        grid-template-areas:
          'mapgrid subtitle subtitle'
          'mapgrid message message';

        .map-community {
          grid-area: mapgrid;
        }

        .subtitle {
          grid-area: subtitle;
          text-align: left;
          margin-bottom: 0;
        }

        .message {
          grid-area: message;
          justify-items: left;

          .text {
            text-align: left;
          }
        }
      }
    }
  }
</style>
