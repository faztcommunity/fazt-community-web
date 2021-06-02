<script>
    import { scrollTo as animatedScroll } from 'svelte-scrollto'
    import { socials } from 'utils/constants'
    import Button from '@components/Button'
    import Link from '@components/Link'

    function scrollTo(element, duration = 1500, offset = -90) {
        animatedScroll({ element, duration, offset })
    }
</script>

<section id="hero">
    <div class="container">
        <article class="message">
            <h1 class="title"><span>Somos</span> Fazt Community</h1>
            <p class="text">
                Crece como profesional compartiendo tus conocimientos con los
                demás y participando en proyectos open source.
            </p>
        </article>
        <article class="buttons">
            <Link external to={socials.DISCORD} btn primary fill large>Unirme a la comunidad</Link>
            <Button large on:click={() => scrollTo('#projects')}>Ver proyectos</Button>
        </article>
    </div>
</section>

<style lang="scss">
    @import 'src/styles/utils';

    section {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0.5;
            background-size: auto 90%;
            background: url('/images/circuit.svg') no-repeat center right;
        }

        .container {
            gap: $size-2xl;
            display: grid;
            position: relative;
            padding-bottom: 90px;
            align-content: center;
            height: calc(100vh - 90px);
            grid-template-rows: repeat(2, fit-content(100%));
            z-index: $z-10;

            .message {
                display: grid;
                gap: $size-base;
                margin-left: auto;
                margin-right: auto;

                span {
                    display: block;
                }
            }

            .buttons {
                display: grid;
                gap: $size-2xl;
                justify-items: center;
                justify-content: center;
                grid-template-columns: fit-content(100%);
                grid-template-rows: repeat(2, fit-content(100%));
            }
        }
    }

    @include media(md) {
        section {
            .container {
                .message {
                    width: 620px;

                    span {
                        display: inline;
                    }
                }

                .buttons {
                    grid-template-rows: fit-content(100%);
                    grid-template-columns: repeat(2, fit-content(100%));
                }
            }
        }
    }

    @include media(lg) {
        section {
            &::before {
                opacity: 1;
            }

            .container {
                .message {
                    width: 750px;
                    margin: 0;
                }

                .buttons {
                    justify-items: left;
                    justify-content: left;
                }
            }
        }
    }
</style>
