<script>
    import Icon from '@components/Icon'

    export let icon
    export let title = 'Fazt Project'
    export let desc = 'Sin descripción'
</script>

<article class="project-card">
    <header>
        <Icon name={icon} size="24" />
        <h4>{title}</h4>
    </header>
    <p>
        {desc}
    </p>
</article>

<style src="styles.scss"></style>
