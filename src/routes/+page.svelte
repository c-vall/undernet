<script>
  import { base } from '$app/paths';
  import '../app.css';

  import HeaderContainer from '$lib/components/HeaderContainer.svelte';
  import SectionWrapper from '$lib/components/SectionWrapper.svelte';
  import PlayerContent from '$lib/components/PlayerContent.svelte';
  import Artists from '$lib/components/Artists.svelte';

  let activeSection = 'members';

  function setSection(section) {
    activeSection = section;
  }
</script>

<svelte:head>
  <title>under.net</title>
  <link rel="icon" href="{base}/images/loading.png" />
  <meta name="darkreader-lock">
</svelte:head>

<div
  class="main-content"
  style={"background-image: url('" + base + "/images/background_test.png'); background-size: cover; background-repeat: no-repeat; background-position: center; background-color: #181818;"}
>
  <section id="main-container">
    <HeaderContainer {setSection} />

    <div class="content-wrapper">
      <div class="content-window" id="music-player"></div>
      <SectionWrapper id="player-container" isVisible={activeSection === 'player'}>
        <PlayerContent />
      </SectionWrapper>

      <SectionWrapper id="members-container" isVisible={activeSection === 'members'}>
        <Artists />
      </SectionWrapper>

      <SectionWrapper id="merch-container" isVisible={activeSection === 'merch'}>
      </SectionWrapper>

      <SectionWrapper id="social-container" isVisible={activeSection === 'social'}>
      </SectionWrapper>

      <SectionWrapper id="about-container" isVisible={activeSection === 'about'}>
      </SectionWrapper>
    </div>
  </section>
</div>
