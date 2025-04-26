<script>
  import { Hamburger } from 'svelte-hamburgers';
</script>
<Hamburger type="elastic" />
<nav class="header">
    <div id="header-container"></div>
    <Hamburger type="elastic" />
    <ul>
      <li class="header-item" id="members"></li>
      <li class="header-item" id="merch">󰒚</li>
      <li class="header-item" id="social">󰤉</li>
      <li class="header-item" id="about">󰋼</li>
    </ul>
  </nav>
<style>

  .header {
    height: 5vh;
    width: 100%;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  
  .header ul {
    display: flex;
    justify-content: space-between;
  }
  
  .header-item {
    font-family: 'Symbols Nerd Font', sans-serif;
    color: white;
    display: block;
    list-style-type: none;
    text-align: center;
    font-size: 30px;
    padding: 15px;
  }
</style>