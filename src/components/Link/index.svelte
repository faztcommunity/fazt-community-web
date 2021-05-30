<script>
    export let btn = false
    export let label = null
    export let fill = false
    export let primary = false
    export let large = false
    export let medium = false
    export let small = false
    export let external = false
    export { href as to }

    let href = '/'
</script>

<a
    {href}
    class:btn
    class:fill
    class:outline={!fill}
    class:primary
    class:secondary={!primary}
    class:large
    class:medium
    class:small
    aria-label={label}
    target={external ? '_blank' : null}
    rel={external ? 'external noopener noreferrer' : 'prefetch'}
    {...$$restProps}>
    <slot />
</a>
