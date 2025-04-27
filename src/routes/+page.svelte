<script>
  import { base } from '$app/paths';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import CDSlider from '$lib/components/CDSlider.svelte';
  import WebampPlayer from '$lib/components/WebampPlayer.svelte';
  import Draggable from '$lib/components/Draggable.svelte';

  const initialTracks = [
    { url: '/tracks/DISC3.1-SURGE/01.Sienna_Sleep-SpectrumSetup420.mp3' },
    { url: '/tracks/DISC3.1-SURGE/02.latex_fruit-jinXtyle.mp3' },
  ];
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
      </div>
    </div>
    <div class="window" id="music-container">
      <div id="cdslider-container">
        <CDSlider />
      </div>
      <div class="window" id="track-container">
      </div>
    </div>      
  </section>
</div>

<style>
.window {
  background-image: url('/images/window_bg.png');
  background-size: cover;
  background-repeat: repeat;
  border: ridge 4px #c0c0c0;
  border-radius: 10px 6px 20px 6px;
  outline: solid 4px black;
  overflow: visible;
  position: relative;
}

#main-container {
  width: min(1100px);
  height: min(90vh, 1000px);
  max-width: 90%;
  max-height: 90vh;
  overflow: visible;
}

#logo-container {
  background-image: url('/images/window_bg_light.png');
  flex: 2;
}

#nextologo-container {
  background-image: url('/images/background.png');
  width: 100%;
  flex: 1;
}

.header-container {
  display: flex;
  gap: 10px;
  padding: 10px;
}

#music-container {
  background-image: url('/images/background.png');
  display: flex;
  gap: 10px;
  padding: 10px;
  margin: 10px;
}

#cdslider-container {
  flex: 1;
}

#track-container {
  background-image: url('/images/window_bg_light.png');
  flex: 2;
}
</style>

