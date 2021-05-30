<script>
    import x from 'assets/icons/x.svg'
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
    import hamburguer from 'assets/icons/hamburguer.svg'

    export let name
    export let size

    const AVAIBLE_ICONS = {
        x,
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
        hamburguer,
    }
    const ICON_NAME = Object.keys(AVAIBLE_ICONS).includes(name) ? name : 'error'
</script>

<div class={`${ICON_NAME} icon`} on:click>
    <svelte:component
        this={AVAIBLE_ICONS[ICON_NAME]}
        width={size}
        height={size}
        {...$$restProps} />
</div>
