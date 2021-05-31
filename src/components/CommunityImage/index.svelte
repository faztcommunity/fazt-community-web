<script>
    export let src
    export let left = false
    export let right = false
    export let blue = false
    export let orange = false

    const square = true
</script>

<div class="community-image">
    <div
        class:left
        class:right
        class:blue
        class:orange
        class:square />
    <img alt class:left style="background: url('/images/{src}') center/cover no-repeat;">
</div>

<style src="styles.scss"></style>
