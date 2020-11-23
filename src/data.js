import { v4 as uuidv4 } from "uuid";

function musicData() {
    return [
        {
            name: "Beaver Creek",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
            internetRadio: false,
        },
        {
            name: "Daylight",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
            internetRadio: false,
        },
        {
            name: "Keep Going",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#4B0D4C", "#CD607D"],
            id: uuidv4(),
            active: false,
            internetRadio: false,
        },
        {
            name: "Nightfall",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
            internetRadio: false,
        },
        {
            name: "Reflection",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#4B0D4C", "#CD607D"],
            id: uuidv4(),
            active: false,
            internetRadio: false,
        },
        {
            name: "Under the City Stars",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
            internetRadio: false,
        },
        // Internet Radio Stations
        {
            name: "106.4 TOP FM",
            artist: "128",
            audio: "http://mp3.topfm.c.nmdn.net/ps-topfm/livestream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "14482 Babelsberg Hitradio",
            artist: "192",
            audio: "http://46.163.75.84:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "181.FM - Classic Hits 181",
            artist: "128",
            audio: "http://relay.181.fm:8132",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "95.5 Charivari",
            artist: "128",
            audio: "http://rs5.stream24.net",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "alster radio 106.8 rock 'n pop",
            artist: "96",
            audio: "http://live96.106acht.de",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern",
            artist: "128",
            audio: "http://channels.webradio.antenne.de/antenne",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - 80er Kulthits",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/80er-kulthits",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Black Beatz",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/black-beatz",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Chillout",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/chillout",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Classic Rock Live",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/classic-rock-live",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Hits fuer Kids",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/hits-fuer-kids",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Lovesongs",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/lovesongs",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Oldies",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/oldies-but-goldies",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Schlager",
            artist: "96",
            audio: "http://channels.webradio.antenne.de/das-schlager-karussell",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Bayern - Top 40",
            artist: "128",
            audio: "http://channels.webradio.antenne.de/top-40",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Muenster",
            artist: "128",
            audio: "http://stream.antennemuenster.de:8000/am128k",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Antenne Saar",
            artist: "128",
            audio:
                "http://asm.akacast.akamaistream.net/7/495/305516/v1/gnl.akacast.akamaistream.net/asm",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Ballermann Radio",
            artist: "128",
            audio: "http://media.ballermann-radio.com:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "BassLover",
            artist: "128",
            audio: "http://s7.relay-basslover.de:9000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Bayern 1 Oberfranken",
            artist: "128",
            audio: "http://streams.br.de/bayern1_2.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Bayern 2 Nord",
            artist: "128",
            audio: "http://streams.br.de/bayern2_2.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Bayern 3",
            artist: "128",
            audio: "http://streams.br.de/bayern3_2.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Bayerwelle Suedost TS",
            artist: "128",
            audio: "http://icebwso2.srv.co.at:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "bigFM",
            artist: "128",
            audio:
                "http://streams.bigfm.de/bigfm-deutschland-128-aac?usid=0-0-H-A-D-30",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "BigRig FM",
            artist: "128",
            audio: "http://radio.bigrig.fm",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "BlackBeats.FM",
            artist: "128",
            audio: "http://stream.blackbeats.fm",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Blackmusic-radio",
            artist: "128",
            audio: "http://listen.bmradio.de",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Bremen Eins",
            artist: "128",
            audio:
                "http://rb-bremeneins-live.cast.addradio.de/rb/bremeneins/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Bremen Vier",
            artist: "128",
            audio:
                "http://rb-bremenvier-live.cast.addradio.de/rb/bremenvier/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Countrymusic24",
            artist: "96",
            audio: "http://countrymusic24.powerstream.de:9000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Crosschannel",
            artist: "128",
            audio:
                "http://c14000-l.i.core.cdn.streamfarm.net/3095crosschannel_dsl.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "DEFJAY.DE",
            artist: "128",
            audio: "http://sc1.netstreamer.net:8040",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Die Neue Welle",
            artist: "128",
            audio: "http://live.meine-neue-welle.de/dnw_128.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Eastcoast",
            artist: "128",
            audio: "http://staff.mp3streams.net/eastcoastgvl",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Energy Berlin",
            artist: "128",
            audio: "http://nrj.de/berlin",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Energy Bremen",
            artist: "128",
            audio: "http://nrj.de/bremen",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Energy Hamburg",
            artist: "128",
            audio: "http://nrj.de/hamburg",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Energy Muenchen",
            artist: "128",
            audio: "http://nrj.de/muenchen",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Energy Stuttgart",
            artist: "128",
            audio: "http://nrj.de/stuttgart",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "eRadio One",
            artist: "192",
            audio: "http://stage-blue-high.eradio-one.de:62005/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ERF Radio",
            artist: "96",
            audio:
                "http://d85195728.i.tis.core005.cdn.streamfarm.net:80/3212erf_96_live.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "FFH Hit Radio",
            artist: "128",
            audio: "http://mp3.ffh.de/radioffh/hqlivestream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HardBase FM",
            artist: "128",
            audio: "http://mp3.hb-stream.net",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HouseTime FM",
            artist: "128",
            audio: "http://mp3.ht-stream.net",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HR Info",
            artist: "128",
            audio: "http://metafiles.gl-systemhaus.de/hr/hrinfo_2.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HR1",
            artist: "128",
            audio:
                "http://hr-hr1-live.cast.addradio.de/hr/hr1/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HR2",
            artist: "128",
            audio:
                "http://hr-hr2-live.cast.addradio.de/hr/hr2/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HR3",
            artist: "128",
            audio:
                "http://hr-hr3-live.cast.addradio.de/hr/hr3/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "HR4",
            artist: "128",
            audio:
                "http://hr-hr4-live.cast.addradio.de/hr/hr4/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "JACK FM",
            artist: "128",
            audio: "http://tuner.jackfm.de",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "jenny.fm",
            artist: "160",
            audio: "http://stream2.jenny.fm:9000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "laut.fm/herrmerkt-radio",
            artist: "128",
            audio: "http://stream.laut.fm/herrmerktradio",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "laut.fm/travel-trends",
            artist: "128",
            audio: "http://stream.laut.fm/travel-trends",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "LOUNGE GROOVES",
            artist: "128",
            audio: "http://de1.streamhosting.ch:8050",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Majesty Internet Radio-Sacred",
            artist: "128",
            audio: "http://primary.moodyradiostream.org/majesty.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "MDR Jump",
            artist: "128",
            audio: "http://avw.mdr.de/streams/284320-0_mp3_high.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Metal-Only",
            artist: "128",
            audio: "http://metal-only.blitz-stream.de",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "multicult fm (multicult2.0)",
            artist: "128",
            audio: "http://stream.multicult.fm:8000/hifi",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR 1 Niedersachsen",
            artist: "128",
            audio:
                "http://www.ndr.de/resources/metadaten/audio/m3u/ndr1niedersachsen.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR 1 Radio MV",
            artist: "128",
            audio:
                "http://www.ndr.de/resources/metadaten/audio/m3u/ndr1radiomv.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR 1 Welle Nord",
            artist: "128",
            audio:
                "http://www.ndr.de/resources/metadaten/audio/m3u/ndr1wellenord.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR 2",
            artist: "128",
            audio: "http://www.ndr.de/resources/metadaten/audio/m3u/ndr2.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR 90,3",
            artist: "128",
            audio: "http://www.ndr.de/resources/metadaten/audio/m3u/ndr903.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR Info",
            artist: "128",
            audio:
                "http://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR Info Spezial",
            artist: "128",
            audio:
                "http://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo_spezial.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NDR Kultur",
            artist: "128",
            audio:
                "http://www.ndr.de/resources/metadaten/audio/m3u/ndrkultur.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "NIGHTLINE RADIO",
            artist: "128",
            audio: "http://radio1.nightline-radio.de:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "N-JOY",
            artist: "128",
            audio: "http://www.ndr.de/resources/metadaten/audio/m3u/n-joy.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Ohrfunk Radio",
            artist: "192",
            audio: "http://server1.digital-webstream.de:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF FM4",
            artist: "156",
            audio: "http://mp3stream1.apasf.apa.at:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Hitradio OE3",
            artist: "128",
            audio: "http://mp3stream7.apasf.apa.at:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio OE1",
            artist: "192",
            audio: "http://mp3stream3.apasf.apa.at:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Burgenland",
            artist: "192",
            audio: "http://194.232.200.146:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Kaernten",
            artist: "156",
            audio: "http://194.232.200.145:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Niederoesterreich",
            artist: "156",
            audio: "http://mp3stream8.apasf.apa.at:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Obeoesterreich",
            artist: "156",
            audio: "http://194.232.200.148:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Salzburg",
            artist: "156",
            audio: "http://194.232.200.147:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Steiermark",
            artist: "192",
            audio: "http://mp3stream9.apasf.apa.at:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "ORF Radio Vorarlberg",
            artist: "128",
            audio: "http://194.232.200.149:8000/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "PsyRadio Chillout",
            artist: "128",
            audio: "http://komplex2.psyradio.org:8030",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "PsyRadio Progressive",
            artist: "128",
            audio: "http://komplex2.psyradio.org:8010",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Radio BOB!",
            artist: "128",
            audio: "http://85.239.108.31/mp3-radiobob",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Radio F.R.E.I.",
            artist: "96",
            audio: "http://streaming.fueralle.org:8000/Radio-F.R.E.I",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Radio Flora",
            artist: "128",
            audio: "http://radioflora.de/stream/live.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #ChartHits-Top40",
            artist: "192",
            audio: "http://Christmas-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #BIGCITYBEATS",
            artist: "192",
            audio: "http://BCB-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #DeutschRap",
            artist: "192",
            audio: "http://Deutschrap-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #DRUMSTEP",
            artist: "192",
            audio: "http://DrumStep-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #HARDER",
            artist: "192",
            audio: "http://HardeR-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #HOUSE",
            artist: "192",
            audio: "http://House-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #ORIENTAL",
            artist: "192",
            audio: "http://Oriental-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #TECHHOUSE",
            artist: "192",
            audio: "http://Progressive-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RauteMusik #TRANCE",
            artist: "192",
            audio: "http://Trance-high.RauteMusik.FM",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Rheinwelle",
            artist: "128",
            audio: "http://s2.onlinestream.de:6640",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Rockantenne",
            artist: "128",
            audio: "http://mp3.webradio.rockantenne.de:80",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Rockland Radio",
            artist: "192",
            audio: "http://188.94.97.90/rockland.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "RundFunk Meissner",
            artist: "128",
            audio: "http://s8.pop-stream.de:8650",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Russian Radio",
            artist: "128",
            audio: "http://play.russian-radio.de:8000;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Schwarzwaldradio",
            artist: "128",
            audio: "http://str31.creacast.com/hitradio_ohr_thema1",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SimLiveRadio",
            artist: "128",
            audio: "http://stream.laut.fm/simliveradio",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Simulator Radio",
            artist: "128",
            audio: "http://stream.simulatorradio.com:8002/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "simulatorONE",
            artist: "128",
            audio: "http://stream.laut.fm/simulator1",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SR 1 Live ",
            artist: "128",
            audio:
                "http://sr1m.akacast.akamaistream.net/7/725/142685/v1/gnl.akacast.akamaistream.net/sr1m",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SR 103.7 Unserding",
            artist: "128",
            audio:
                "http://udm.akacast.akamaistream.net/7/384/142688/v1/gnl.akacast.akamaistream.net/udm",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SR 2 Kulturradio",
            artist: "128",
            audio:
                "http://sr2m.akacast.akamaistream.net/7/375/142686/v1/gnl.akacast.akamaistream.net/sr2m",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SR 3 Saarlandwelle",
            artist: "128",
            audio:
                "http://sr3m.akacast.akamaistream.net/7/722/142687/v1/gnl.akacast.akamaistream.net/sr3m",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "StadtRadio Goettingen",
            artist: "128",
            audio: "http://stream.stadtradio-goettingen.de:8000/stadtradio.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Sunshine Live 2000er",
            artist: "128",
            audio:
                "http://stream.sunshine-live.de/2000er/mp3-192/stream.sunshine-live.de/",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Sunshine Live",
            artist: "128",
            audio:
                "http://stream.sunshine-live.de/live/mp3-192/stream.sunshine-live.de/",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SWR1",
            artist: "128",
            audio: "http://mp3-live.swr.de/swr1rp_s.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SWR2",
            artist: "128",
            audio: "http://mp3-live.swr.de/swr2_s.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SWR2",
            artist: "128",
            audio: "http://mp3-live.swr.de/swr2_s.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SWR3",
            artist: "128",
            audio: "http://mp3-live.swr3.de/swr3_s.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "SWR4",
            artist: "128",
            audio: "http://mp3-live.swr.de/swr4rp_s.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "TechLiveRadio",
            artist: "128",
            audio: "http://stream.laut.fm/techliveradio",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "TechnoBase.FM",
            artist: "192",
            audio: "http://dsl.tb-stream.net:80",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "TranceBase.FM",
            artist: "192",
            audio: "http://mp3.trb-stream.net",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "TruckersFM",
            artist: "128",
            audio: "http://radio.truckers.fm",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "TruckSimFM",
            artist: "128",
            audio: "http://radio.trucksim.fm:8000/stream",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "UZIC - Techno Minimal",
            artist: "128",
            audio: "http://stream.uzic.ch:9010/;",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "WDR 1 Live",
            artist: "128",
            audio: "http://www.wdr.de/wdrlive/media/einslive.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "WDR 2",
            artist: "128",
            audio: "http://www.wdr.de/wdrlive/media/wdr2.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "WDR 3",
            artist: "128",
            audio: "http://www.wdr.de/wdrlive/media/wdr3.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "WDR 4 Media",
            artist: "128",
            audio: "http://www.wdr.de/wdrlive/media/wdr4.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "WDR 5",
            artist: "128",
            audio: "http://www.wdr.de/wdrlive/media/wdr5.m3u",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "Wunschradio.fm",
            artist: "128",
            audio: "http://stream.wunschradio.de/wunschradio/livestream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        {
            name: "YouFM",
            artist: "128",
            audio:
                "http://hr-youfm-live.cast.addradio.de/hr/youfm/live/mp3/128/stream.mp3",
            id: uuidv4(),
            active: false,
            internetRadio: true,
        },
        //ADD MORE HERE
    ];
}

export default musicData;
