<script>
  import RandomLogo from '$lib/components/RandomLogo.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import NavMenu from './NavMenu.svelte';
  export let setSection;
</script>

<div class="header-container">
  <div class="window" id="logo-container">
    <RandomLogo>
      <Logo />
    </RandomLogo>
  </div>
  <div class="window" id="nextologo-container">
    <NavMenu {setSection} />
  </div>
</div>
