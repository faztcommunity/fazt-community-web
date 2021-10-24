<script>
  import users from '@assets/data/users.json'
</script>

<div class="map-grid">
  <div class="map">
    {#each users as { name, avatar }, i}
      <img class="user{i + 1}" src="/images/{avatar}" title={name} alt={name} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import 'src/styles/utils';

  .map-grid {
    width: 340px;
    height: 260px;

    .map {
      width: 100%;
      height: 100%;
      position: relative;
      background: url('/images/world_map.svg') center/contain no-repeat;

      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        position: absolute;

        &.user1 {
          top: 40px;
          left: 60px;
        }
        &.user2 {
          top: 90px;
          left: 50px;
        }
        &.user3 {
          top: 140px;
          left: 70px;
        }
        &.user4 {
          top: 60px;
          left: 120px;
        }
        &.user5 {
          top: 120px;
          left: 130px;
        }
        &.user6 {
          top: 160px;
          left: 100px;
        }
        &.user7 {
          top: 45px;
          left: 180px;
        }
        &.user8 {
          top: 90px;
          left: 180px;
        }
        &.user9 {
          top: 140px;
          left: 180px;
        }
        &.user10 {
          top: 170px;
          left: 220px;
        }
        &.user11 {
          top: 60px;
          left: 240px;
        }
        &.user12 {
          top: 120px;
          left: 240px;
        }
        &.user13 {
          top: 40px;
          left: 300px;
        }
        &.user14 {
          top: 80px;
          left: 280px;
        }
        &.user15 {
          top: 160px;
          left: 280px;
        }
      }
    }
  }

  @include media(sm) {
    .map-grid {
      width: 490px;
      height: 275px;

      .map {
        img {
          &.user1 {
            top: 40px;
            left: 100px;
          }
          &.user2 {
            top: 90px;
            left: 80px;
          }
          &.user3 {
            top: 160px;
            left: 100px;
          }
          &.user4 {
            top: 45px;
            left: 180px;
          }
          &.user5 {
            top: 130px;
            left: 200px;
          }
          &.user6 {
            top: 170px;
            left: 150px;
          }
          &.user7 {
            top: 40px;
            left: 240px;
          }
          &.user8 {
            top: 90px;
            left: 240px;
          }
          &.user9 {
            top: 140px;
            left: 260px;
          }
          &.user10 {
            top: 190px;
            left: 320px;
          }
          &.user11 {
            top: 60px;
            left: 340px;
          }
          &.user12 {
            top: 120px;
            left: 350px;
          }
          &.user13 {
            top: 30px;
            left: 420px;
          }
          &.user14 {
            top: 80px;
            left: 420px;
          }
          &.user15 {
            top: 200px;
            left: 400px;
          }
        }
      }
    }
  }
</style>
