setTimeout(function() {
    document.querySelector('.loading-container').style.opacity = '0';
    document.querySelector('.logo-container').style.opacity = '1';

    const webamp = new Webamp({
        
        initialTracks: [
            {
                metaData: {
                    artist: "Demo Artist",
                    title: "Demo Track"
                },
                url: "/assets/music/loam.wav",
                duration: 5.322286
            }
        ],

        availableSkins: [
            {
              url: "assets/winampskins/bluesilver",
              name: "bluesilver",
            },
        ],

        target: document.getElementById("webamp-container")
    });

    webamp.renderWhenReady(document.getElementById("webamp-container"));
}, 1500);