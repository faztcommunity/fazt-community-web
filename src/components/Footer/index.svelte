<script>
  import Link from '@components/Link'
  import Icon from '@components/Icon'
  import { socials } from 'utils/constants'
</script>

<footer>
  <div class="content">
    <span class="copy-left">All rights not reserved 2021</span>
    <span class="community">Fazt Community</span>
    <ul class="socials">
      <li>
        <Link external to={socials.DISCORD} alt="Discord">
          <Icon name="discord" size="32" fill="white" />
        </Link>
      </li>
      <li>
        <Link external to={socials.GITHUB} alt="Github">
          <Icon name="github" size="32" fill="white" />
        </Link>
      </li>
    </ul>
  </div>
</footer>

<style src="styles.scss"></style>
