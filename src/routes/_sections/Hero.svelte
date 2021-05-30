<script>
    import Button from '@components/Button'
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
            <Button primary fill large>Unirme a la comunidad</Button>
            <Button large>Ver proyectos</Button>
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
            background: url('/images/circuit.svg') no-repeat center right;
            background-size: auto 90%;
        }

        .container {
            display: grid;
            gap: $size-2xl;
            padding-bottom: 90px;
            align-content: center;
            height: calc(100vh - 90px);
            grid-template-rows: repeat(2, fit-content(100%));

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
