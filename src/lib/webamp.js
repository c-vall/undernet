<script>
  import { onMount } from 'svelte';
  import butterchurn from 'butterchurn';
  import butterchurnPresets from 'butterchurn-presets';

  export let initialTracks = [];
  export let skinUrl = "/assets/winampskins/bluesilver";

  let webamp;

  onMount(async () => {
    if (typeof window === 'undefined') return;

    const { default: Webamp } = await import('webamp'); // ✅ dynamic import

    if (!Webamp?.browserIsSupported()) {
      alert("Oh no! Webamp does not work!");
      throw new Error("Webamp not supported");
    }

    webamp = new Webamp({
      initialTracks,
      initialSkin: { url: skinUrl },
      target: document.getElementById('webamp-container'),
      __butterchurnOptions: {
        importButterchurn: () => Promise.resolve(butterchurn),
        getPresets: () => {
          const presets = butterchurnPresets.getPresets();
          return Object.keys(presets).map((name) => ({
            name,
            butterchurnPresetObject: presets[name],
          }));
        },
        butterchurnOpen: true,
      },
      windowLayout: {
        main: { position: { top: 0, left: 0 } },
        equalizer: { position: { top: 116, left: 0 } },
        playlist: {
          position: { top: 232, left: 0 },
          size: { extraWidth: 0, extraHeight: 4 },
        },
        milkdrop: {
          position: { top: 0, left: 275 },
          size: { extraHeight: 12, extraWidth: 7 },
        },
      },
    });

    await webamp.renderWhenReady();
    webamp.setSkinFromUrl(skinUrl);
    webamp.store.dispatch({ type: "SET_VOLUME", volume: 15 });
  });
</script>

<div id="webamp-container"></div>
