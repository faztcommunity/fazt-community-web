<script>
  export let fill = false
  export let primary = false
  export let large = false
  export let medium = false
  export let small = false

  const btn = true
</script>

<button
  class:btn
  class:fill
  class:outline={!fill}
  class:primary
  class:secondary={!primary}
  class:large
  class:medium
  class:small
  {...$$restProps}
  on:click
>
  <slot />
</button>
