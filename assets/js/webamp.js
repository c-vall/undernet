// --- Disc Metadata ---

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
const disc32url = "assets/tracks/DISC3.2-RAPTURE/"
const disc32tracks = [
    { url: `${disc32url}01.pixygarden-Floating_Angels.mp3` },
    { url: `${disc32url}02.Helena_DLX-Cloud9.mp3` },
    { url: `${disc32url}03.nabii-ALL_THE_WAY.mp3` },
    { url: `${disc32url}04.earthangelbaby-you_remind_me.mp3` },
    { url: `${disc32url}05.2040x2040-ERRORCODE2040.mp3` },
    { url: `${disc32url}06.enable_secret-make_u_stay.mp3` },
    { url: `${disc32url}07.dreamloader-eurolife.mp3` },
    { url: `${disc32url}08.beansclub-still_thinking_bout_you.mp3` },
]
const disc33url = "assets/tracks/DISC3.3-SHIMMER/"
const disc33tracks = [
    { url: `${disc33url}01.AITANA_OFICIAL-isthisrlylove.mp3` },
    { url: `${disc33url}02.stillscapes-RADIANCE.mp3` },
    { url: `${disc33url}03.EDENA-Voices.mp3` },
    { url: `${disc33url}04.juriha-jisatsu_nenryo2.mp3` },
    { url: `${disc33url}05.Aero-Ji-Get_Through!.mp3` },
    { url: `${disc33url}06.ASL-BiOHAZARD.mp3` },
    { url: `${disc33url}07.purityleech-What_I_Want_To_Tell_You.mp3` },
    { url: `${disc33url}08.luuxu-SUPADANCEFREAK.mp3` },
    { url: `${disc33url}09.jumble-I_DONT_LIKE_THIS_PARTY.mp3` },
]

const disc34url = "assets/tracks/DISC3.4-ECCENTRICS/"
const disc34tracks = [
    { url: `${disc34url}01.Squidgy_Ghost_In_The_System-wisteria.mp3` },
    { url: `${disc34url}02.c678924-hesperiidae.mp3` },
    { url: `${disc34url}03.Anthony1-beansclub.mp3` },
    { url: `${disc34url}04.Golemm-error.mp3` },
    { url: `${disc34url}05.phosphorrgirl-next_generation.mp3` },
    { url: `${disc34url}06.HUMAN_PART-STJ.mp3` },
    { url: `${disc34url}07.Mrs.Glare-baroque_of_moo.mp3` },
    { url: `${disc34url}08.Zhnoi-denpa.mp3` },
    { url: `${disc34url}09.echia-in_my_younger_days.mp3` },
    { url: `${disc34url}10.kiitzuna-dehyalyn.mp3` },
]

const Winamp = window.Webamp
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}

// --- Disc Loaders ---
const DISCBtn31 = document.getElementById('DISC31BTN');
function click31() {
    webamp.setTracksToPlay(disc31tracks)
}
DISCBtn31.addEventListener('click', click31);

const DISCBtn32 = document.getElementById('DISC32BTN');
function click32() {
    webamp.setTracksToPlay(disc32tracks)
}
DISCBtn32.addEventListener('click', click32);

const DISCBtn33 = document.getElementById('DISC33BTN');
function click33() {
    webamp.setTracksToPlay(disc32tracks)
}
DISCBtn33.addEventListener('click', click33);

const DISCBtn34 = document.getElementById('DISC34BTN');
function click34() {
    webamp.setTracksToPlay(disc34tracks)
}
DISCBtn34.addEventListener('click', click34);

// --- Initialize Webamp
const webamp = new Webamp({
    initialTracks: disc31tracks,
    initialSkin: {
        url: "assets/winampskins/bluesilver"
    },
    target: document.getElementById("webamp-container"),
});

webamp
    .renderWhenReady(document.getElementById("webamp-container"))
    .then(() => {
      webamp.setSkinFromUrl("assets/winampskins/bluesilver");
    });
