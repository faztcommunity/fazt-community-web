<script>
  import Link from '@components/Link.svelte'
  import Icon from '@components/Icon.svelte'
  import { socials } from '@utils/constants'
</script>

<footer>
  <div class="content">
    <span class="copy-left">All rights not reserved 2021</span>
    <span class="community">Fazt Community</span>
    <ul class="socials">
      <li>
        <Link external to={socials.DISCORD} alt="Discord">
          <Icon name="discord" size="32" color="white" />
        </Link>
      </li>
      <li>
        <Link external to={socials.GITHUB} alt="Github">
          <Icon name="github" size="32" color="white" />
        </Link>
      </li>
    </ul>
  </div>
</footer>

<style lang="scss">
  @use 'sass:map';
  @import 'src/styles/utils';

  footer {
    display: grid;
    background: $black;

    .content {
      width: 100%;
      display: grid;
      color: white;
      gap: $size-base;
      justify-self: center;
      justify-items: center;
      padding-top: $size-2xl;
      padding-bottom: $size-2xl;
      max-width: map.get($breakpoints, 2xl);
      grid-template-rows: repeat(3, fit-content(100%));

      .copy-left {
        font-weight: 700;
      }

      .socials {
        display: grid;
        gap: $size-2xl;
        justify-content: center;
        grid-template-columns: repeat(2, fit-content(100%));
      }
    }
  }

  @include media(lg) {
    footer {
      .content {
        align-items: center;
        padding-top: $size-lg;
        padding-bottom: $size-lg;
        grid-template-rows: fit-content(100%);
        grid-template-columns: repeat(3, 1fr);

        .copy-left {
          font-weight: 400;
        }

        .socials {
          display: grid;
          gap: $size-2xl;
          justify-content: center;
          grid-template-columns: repeat(2, fit-content(100%));
        }
      }
    }
  }
</style>
