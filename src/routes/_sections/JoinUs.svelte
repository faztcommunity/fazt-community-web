<script>
  import Steps from '@components/Steps'
  import Button from '@components/Button'
  import CircuitBackground from '@components/CircuitBackground'
</script>

<section id="join-us">
  <CircuitBackground />
  <div class="container">
    <article class="message">
      <h2 class="subtitle">¿Qué esperas para unirte?</h2>
      <p class="text">
        En Fazt Community somos más de 15,000 personas. Donde aprendemos juntos,
        trabajamos en equipo y a cambio obtienes experiencias y conocimientos en
        proyectos.
      </p>
    </article>

    <article class="join-to-community">
      <strong>Crece como profesional en 3 pasos</strong>

      <Steps />

      <Button primary fill large>Unirme a la comunidad</Button>
    </article>
  </div>
</section>

<style lang="scss">
  @use 'sass:map';
  @import 'src/styles/utils';

  section {
    position: relative;
    padding-top: $size-7xl;
    padding-bottom: $size-9xl;

    .container {
      display: grid;
      gap: $size-3xl;
      z-index: $z-10;
      position: relative;

      .message {
        display: grid;
        gap: $size-base;
        justify-items: center;

        .text {
          max-width: 644px;
        }
      }

      .join-to-community {
        display: grid;
        gap: $size-2xl;
        justify-items: center;

        strong {
          color: map.get($gray, 300);
          font-weight: 700;
          font-size: $size-lg;
        }
      }
    }
  }

  @include media(lg) {
    section {
      padding-top: 7rem;
      padding-bottom: 15rem;

      .container {
        .message {
          .subtitle {
            text-align: center;
          }

          .text {
            text-align: center;
          }
        }
      }
    }
  }
</style>
