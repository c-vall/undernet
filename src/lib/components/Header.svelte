<script>
  import { Hamburger } from 'svelte-hamburgers';
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    console.log('isOpen:', isOpen);
  }
</script>

<nav class="header">
  <div id="header-container">
    <Hamburger
      type="elastic"
      toggled={isOpen}
      toggle={toggleMenu}
    />
  </div>

  {#if isOpen}
    <ul>
      <li class="header-item" id="members"></li>
      <li class="header-item" id="merch">󰒚</li>
      <li class="header-item" id="social">󰤉</li>
      <li class="header-item" id="about">󰋼</li>
    </ul>
  {/if}
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
  }

  li {
    margin-bottom: 8px;
  }

  @font-face {
  font-family: 'Symbols Nerd Font';
  src: url('/fonts/SymbolsNerdFont-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>



