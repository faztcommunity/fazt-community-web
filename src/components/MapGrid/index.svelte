<script>
    import users from 'assets/data/users.json'
</script>

<div class="map-grid">
    <div class="map">
        {#each users as { name, avatar }, i}
            <img
                class="user{i + 1}"
                src="/images/{avatar}"
                title={name}
                alt={name} />
        {/each}
    </div>
</div>

<style src="styles.scss"></style>
