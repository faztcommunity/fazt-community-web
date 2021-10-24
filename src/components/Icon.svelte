<script>
  import InlineSVG from 'svelte-inline-svg'

  export let name
  export let size
  export let color = 'currentColor'

  $: attributes = {
    fill: color,
    width: size,
    height: size,
  }
</script>

<InlineSVG src="/icons/{name}.svg" {...attributes} />
