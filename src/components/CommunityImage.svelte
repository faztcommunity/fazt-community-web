<script>
  export let src
  export let left = false
  export let right = false
  export let blue = false
  export let orange = false

  const square = true
  const title =
    src.charAt(0).toUpperCase() + src.slice(1).split('.')[0].replace('_', ' ')
</script>

<div class="community-image">
  <div class:left class:right class:blue class:orange class:square />
  <img
    loading="lazy"
    class:left
    style="background: url('/images/{src}') center/cover no-repeat;"
    {title}
    alt />
</div>

<style lang="scss">
  @import 'src/styles/utils';

  .community-image {
    .square {
      position: absolute;
      opacity: 0.5;
      border-radius: $size-2xs;
      width: 77px;
      height: 66px;

      &.right {
        margin: 136px 0px 0px 263px;
      }

      &.left {
        margin: 136px 0px 0px 0px;
      }

      &.orange {
        background-color: $color-active-light;
      }

      &.blue {
        background-color: $color-secondary-light;
      }
    }

    img {
      position: relative;
      width: 320px;
      height: 182px;
      border-radius: $size-2xs;
      z-index: 1;

      &.left {
        margin-left: 20px;
      }
    }
  }

  @include media(lg) {
    .community-image {
      .square {
        width: 123px;
        height: 106px;

        &.left {
          margin: 218px 0px 0px 0px;
        }

        &.right {
          margin: 216px 0px 0px 417px;
        }
      }

      img {
        width: 508px;
        height: 290px;

        &.left {
          margin-left: 30px;
        }
      }
    }
  }
</style>
