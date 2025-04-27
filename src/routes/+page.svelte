<script>
  import { base } from '$app/paths';
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
    <div class="header-container">
      <div class="window" id="logo-container">
        <Logo/>
      </div>
      <div class="window" id="nextologo-container">
        <ul class="nav-menu">
          <li class="header-item">
            <button class="nav-button" on:click={() => setSection('members')}></button>
          </li>
          <li class="header-item">
            <button class="nav-button" on:click={() => setSection('player')}>󰓃</button>
          </li>
          <li class="header-item">
            <button class="nav-button" on:click={() => setSection('merch')}>󰒚</button>
          </li>
          <li class="header-item">
            <button class="nav-button" on:click={() => setSection('social')}>󰤉</button>
          </li>
          <li class="header-item">
            <button class="nav-button" on:click={() => setSection('about')}>󰋼</button>
          </li>
        </ul>
      </div>
    </div>

  {#if activeSection === 'player'}
    <div class="content-window" id="player-container">
      <div class="window" id="video-container"></div>
      <div class="lower-music-content">
        <div id="cdslider-container">
          <CDSlider />
        </div>
        <div class="window" id="track-container"></div>
      </div>
    </div>
  {/if}
  
  {#if activeSection === 'members'}
    <div class="content-window" id="members-container">
      <div class="window" id="world-map">
        <img src="https://t4.ftcdn.net/jpg/02/99/21/23/360_F_299212330_IJrlUJrSG0KGovF5nJKFgms3A8cvHDLQ.jpg" alt="World Map" />
      </div>
    </div>
  {/if}

  {#if activeSection === 'merch'}
    <div class="content-window" id="merch-container">

    </div>
  {/if}
  
  {#if activeSection === 'social'}
    <div class="content-window" id="social-container">

    </div>
  {/if}
  
  {#if activeSection === 'about'}
    <div class="content-window" id="about-container">

    </div>
  {/if}
    
  </section>
</div>

<style>

</style>

