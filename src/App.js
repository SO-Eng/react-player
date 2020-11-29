import React, { useState, useRef, useEffect } from "react";
// Import Styles
import "./styles/app.scss";
// Adding Components
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// import Music
import data from "./data";

function App() {
    // Ref
    const audioRef = useRef(null);
    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [songChanged, setSongChanged] = useState(true);
    const [rndNum, setRndNum] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [musicVolume, setMusicVolume] = useState(0.1);
    const [favoritesChanged, setFavoritesChanged] = useState(true);

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        // Calculate Percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);

        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,
            animationPercentage: animation,
        });
    };

    useEffect(() => {
        audioRef.current.volume = musicVolume;
    }, [musicVolume]);

    const activeLibraryHandler = (nextPrev) => {
        const newSong = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSong);
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    return (
        <div className={`App ${libraryStatus && "libraryActive"}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song
                currentSong={currentSong}
                songChanged={songChanged}
                setSongChanged={setSongChanged}
                setRndNum={setRndNum}
                isPlaying={isPlaying}
            />
            <Player
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
                setSongs={setSongs}
                musicVolume={musicVolume}
                setMusicVolume={setMusicVolume}
                setSongChanged={setSongChanged}
                rndNum={rndNum}
            />
            <Library
                songs={songs}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                libraryStatus={libraryStatus}
                setSongChanged={setSongChanged}
                favoritesChanged={favoritesChanged}
                setFavoritesChanged={setFavoritesChanged}
                setIsPlaying={setIsPlaying}
            />
            <audio
                preload="auto"
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default App;
