<script>
    import Icon from '@components/Icon'
    import Link from '@components/Link'

    export let icon
    export let label
    export { to as link }
    export let title = 'Fazt Project'
    export let desc = 'Sin descripción'

    let to
</script>

<Link {to} {label}>
    <div class="project-card">
        <header>
            <Icon name={icon} size="24" />
            <h4>{title}</h4>
        </header>
        <p>
            {desc}
        </p>
    </div>
</Link>

<style src="styles.scss"></style>
