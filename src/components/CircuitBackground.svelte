<div class="circuit-background">
  <img src="/images/circuito_left.svg" alt />
  <img src="/images/circuito_right.svg" alt />
</div>

<style lang="scss">
  @import 'src/styles/utils';

  .circuit-background {
    width: 100%;
    display: none;
    position: absolute;
    z-index: $z-0;
  }

  @include media(lg) {
    .circuit-background {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
