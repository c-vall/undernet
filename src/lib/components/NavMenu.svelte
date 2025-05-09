<script>
  export let setSection;
</script>

<ul class="nav-menu">
  <li class="header-item"><button class="nav-button" on:click={() => setSection('members')}></button></li>
  <li class="header-item"><button class="nav-button" on:click={() => setSection('player')}>󰓃</button></li>
  <li class="header-item"><button class="nav-button" on:click={() => setSection('merch')}>󰒚</button></li>
  <li class="header-item"><button class="nav-button" on:click={() => setSection('social')}>󰤉</button></li>
  <li class="header-item"><button class="nav-button" on:click={() => setSection('about')}>󰋼</button></li>
</ul>
