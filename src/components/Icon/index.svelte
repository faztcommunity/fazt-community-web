<script>
    import api from 'assets/icons/api.svg'
    import bot from 'assets/icons/bot.svg'
    import eye from 'assets/icons/eye.svg'
    import web from 'assets/icons/web.svg'
    import logo from 'assets/icons/logo.svg'
    import check from 'assets/icons/check.svg'
    import cross from 'assets/icons/cross.svg'
    import error from 'assets/icons/error.svg'
    import github from 'assets/icons/github.svg'
    import discord from 'assets/icons/discord.svg'
    import success from 'assets/icons/success.svg'
    import warning from 'assets/icons/warning.svg'
    import database from 'assets/icons/database.svg'
    import eyeclose from 'assets/icons/eyeclose.svg'

    export let name
    export let size = 24

    const AVAIBLE_ICONS = {
        api,
        bot,
        eye,
        web,
        logo,
        check,
        cross,
        error,
        github,
        discord,
        success,
        warning,
        database,
        eyeclose,
    }
</script>

<svelte:component
    this={AVAIBLE_ICONS[
        Object.keys(AVAIBLE_ICONS).includes(name) ? name : 'error'
    ]}
    width={size}
    height={size}
    {...$$restProps}
    on:click />
