<script>
    export let src
    export let left = false
    export let right = false
    export let blue = false
    export let orange = false

    const square = true
    const title =
        src.charAt(0).toUpperCase() +
        src.slice(1).split('.')[0].replace('_', ' ')
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

<style src="styles.scss"></style>
