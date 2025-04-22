setTimeout(function() {
    document.querySelector('.loading-container').style.opacity = '0';
    document.querySelector('.logo-container').style.opacity = '1';

    const Winamp = window.Webamp
    if(!Webamp.browserIsSupported()) {
        alert("Oh no! Webamp does not work!")
        throw new Error("What's the point of anything?")
    }


    const disc31url = "assets/tracks/DISC3.1-SURGE/"
    const disc31tracks = [
        { url: `${disc31url}01.Sienna_Sleep-SpectrumSetup420.mp3` },
        { url: `${disc31url}02.latex_fruit-jinXtyle.mp3` },
        { url: `${disc31url}03.duzy-lemonade.mp3` },
        { url: `${disc31url}04.Type_R-Aphrodisiac.mp3` },
        { url: `${disc31url}05.purity_filter-stel_fir.mp3` },
        { url: `${disc31url}06.cybermonk-nullptr_t-332.mp3` },
        { url: `${disc31url}07.sixteen_veins-as_the_universe_so_the_soul.mp3` },
        { url: `${disc31url}08.DWAMS-xX_angel_tearz_Xx.mp3` },
        { url: `${disc31url}09.Summoned_skull-Lust_and_Delirium.mp3` },
        { url: `${disc31url}10.MEKA-Love_Lies_Bleeding.mp3` },
    ]
    const DISCBtn31 = document.getElementById('DISC31BTN');
    function click31() {
        webamp.setTracksToPlay(disc31tracks)
    }
    DISCBtn31.addEventListener('click', click31);


    const disc32url = "assets/tracks/DISC3.2-RAPTURE/"
    const disc32tracks = [
        {url: `${disc32url}01.pixygarden-Floating_Angels.mp3` },
        {url: `${disc32url}02.Helena_DLX-Cloud9.mp3` },
        {url: `${disc32url}03.nabii-ALL_THE_WAY.mp3` },
        {url: `${disc32url}04.earthangelbaby-you_remind_me.mp3` },
        {url: `${disc32url}05.2040x2040-ERRORCODE2040.mp3` },
        {url: `${disc32url}06.enable_secret-make_u_stay.mp3` },
        {url: `${disc32url}07.dreamloader-eurolife.mp3` },
        {url: `${disc32url}08.beansclub-still_thinking_bout_you.mp3` },
    ]
    const DISCBtn32 = document.getElementById('DISC32BTN');
    function click32() {
        webamp.setTracksToPlay(disc32tracks)
    }
    DISCBtn32.addEventListener('click', click32);



    const webamp = new Webamp({
        initialTracks: disc31tracks,
        
        // add initialskin maybe:
        // initialSkin: {
        // url: "path/to/skin"
        // }

        target: document.getElementById("webamp-container")
    });

    webamp.renderWhenReady(document.getElementById("webamp-container")).then(() => {
        webamp.setSkinFromUrl("assets/winampskins/bluesilver");
    });
}, 1500);
