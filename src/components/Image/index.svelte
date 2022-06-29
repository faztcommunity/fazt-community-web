<script>
  export let alt
  export let circle
  export let rounded
  export let title = alt
  export let src = IMG_404
  export let external = false

  const TITLE_404 = 'Image not found'
  const IMG_404 = 'default_image.png'

  function errorHandler() {
    if (this.src !== IMG_404) {
      this.onerror = null
      this.src = IMG_404
      this.alt = TITLE_404
      this.title = TITLE_404
    }
  }

  $: if (!external) src = `/images/${src}`
</script>

<img
  {src}
  {alt}
  {title}
  class:circle
  class:rounded
  loading="lazy"
  {...$$restProps}
  on:click
  on:error={errorHandler}
/>

<style src="styles.scss"></style>
