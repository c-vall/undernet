<script>
  import { base } from '$app/paths';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import CDSlider from '$lib/components/CDSlider.svelte';
  import WebampPlayer from '$lib/components/WebampPlayer.svelte';
  
  const initialTracks = [
    { url: base + '/tracks/DISC3.1-SURGE/01.Sienna_Sleep-SpectrumSetup420.mp3' },
    { url: base + '/tracks/DISC3.1-SURGE/02.latex_fruit-jinXtyle.mp3' },
  ];
</script>

<svelte:head>
  <title>under.net</title>
  <link rel="icon" href={base + '/images/undernetlogo.png'} />
</svelte:head>

<div
  class="main-content"
  style={"background-image: url('" + base + "/images/background.png'); background-color: #ffffff;"}
>
  <Header />
  <Logo />
  <WebampPlayer {initialTracks} skinUrl={base + '/webampskins/bluesilver.wsz'} />
  <CDSlider />
  <Footer />
</div>
