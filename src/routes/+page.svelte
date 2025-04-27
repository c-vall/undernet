<script>
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';

  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import CDSlider from '$lib/components/CDSlider.svelte';
  import WebampPlayer from '$lib/components/WebampPlayer.svelte';
  import Draggable from '$lib/components/Draggable.svelte';

  let activeSection = 'player';

  function setSection(section) {
    activeSection = section;
  }
</script>

<svelte:head>
  <title>under.net</title>
  <link rel="icon" href="{base}/images/undernetlogo.png" />
</svelte:head>

<div class="main-content" style={"background-image: url('" + base + "/images/background.png'); background-color: #ffffff;"}>
  <section class="window" id="main-container">
    <!-- Header -->
    <div class="header-container">
      <div class="window" id="logo-container">
        <Logo/>
      </div>
      <div class="window" id="nextologo-container">
        <ul class="nav-menu">
          <li class="header-item"><button class="nav-button" on:click={() => setSection('members')}></button></li>
          <li class="header-item"><button class="nav-button" on:click={() => setSection('player')}>󰓃</button></li>
          <li class="header-item"><button class="nav-button" on:click={() => setSection('merch')}>󰒚</button></li>
          <li class="header-item"><button class="nav-button" on:click={() => setSection('social')}>󰤉</button></li>
          <li class="header-item"><button class="nav-button" on:click={() => setSection('about')}>󰋼</button></li>
        </ul>
      </div>
    </div>

    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <div class="content-window {activeSection !== 'player' ? 'hidden' : ''}" id="player-container">
        <div class="window" id="video-container"></div>
        <div class="lower-music-content">
          <div id="cdslider-container">
            <CDSlider />
          </div>
          <div class="window" id="track-container"></div>
        </div>
      </div>

      <div class="content-window {activeSection !== 'members' ? 'hidden' : ''}" id="members-container">
        <div class="window" id="world-map">
          <img src="{base}/images/map.png" alt="World Map" />
        </div>
      </div>

      <div class="content-window {activeSection !== 'merch' ? 'hidden' : ''}" id="merch-container">

      </div>

      <div class="content-window {activeSection !== 'social' ? 'hidden' : ''}" id="social-container">

      </div>

      <div class="content-window {activeSection !== 'about' ? 'hidden' : ''}" id="about-container">

      </div>
    </div>

  </section>
</div>

<style>
</style>
