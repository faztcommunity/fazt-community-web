<script>
  import Icon from '@components/Icon.svelte'
  import Link from '@components/Link.svelte'

  export let icon
  export let label
  export { to as link }
  export let title = 'Fazt Project'
  export let desc = 'Sin descripción'

  let to
</script>

<Link {to} {label}>
  <div class="project-card">
    <header>
      <Icon name={icon} size="24" />
      <h4>{title}</h4>
    </header>
    <p>
      {desc}
    </p>
  </div>
</Link>

<style lang="scss">
  @use 'sass:map';
  @import 'src/styles/utils';

  .project-card {
    width: 340px;
    display: grid;
    gap: $size-base;
    user-select: none;
    background: white;
    border-radius: $size-2xs;
    padding: $size-2xl $size-xl;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 8px 10px #0776c6e6;
    grid-template-rows: repeat(2, fit-content(100%));

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 16px 16px #0776c6e6;
    }

    header {
      display: grid;
      gap: $size-2xs;
      font-weight: 700;
      font-size: $size-lg;
      align-items: flex-end;
      grid-template-rows: fit-content(100%);
      grid-template-columns: fit-content(100%) auto;
    }

    p {
      color: map.get($gray, 300);
    }
  }
</style>
