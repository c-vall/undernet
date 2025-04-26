<script>
  import { Hamburger } from 'svelte-hamburgers';
</script>

<Hamburger type="elastic" />
<nav class="header">
    <div id="header-container"></div>
    <ul>
      <li class="header-item"><b>HOME</b></li>
      <li class="header-item"><b>MEMBERS</b></li>
      <li class="header-item"><b>SHOP</b></li>
      <li class="header-item"><b>ABOUT</b></li>
      <li class="header-item"><b>SOCIAL</b></li>
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
    font-family: "Neutronica DNA", sans-serif;
    color: white;
    display: block;
    list-style-type: none;
    text-align: center;
    font-size: 30px;
    padding: 15px;
  }
</style>