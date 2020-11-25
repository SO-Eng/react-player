import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";
import graphicData from "../graphic";

const Player = ({
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    songs,
    setSongs,
    musicVolume,
    setMusicVolume,
    setSongChanged,
    rndNum,
}) => {
    const graphicColor = graphicData();

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
        setSongChanged(true);
    };

    // Event Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const getInternetTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        const position = e.target.value;
        audioRef.current.currentTime = position;
        setSongInfo({ ...songInfo, currentTime: position });
    };

    const volumeHandler = (e) => {
        const position = e.target.value;
        //audioRef.current.volume = position;
        setMusicVolume(position);
    };

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(
            (song) => song.id === currentSong.id
        );
        if (direction === "skip-forward") {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        } else {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
            } else {
                await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
                activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
            }
        }
        if (isPlaying) {
            audioRef.current?.play();
        }
    };

    // Add Styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
    };

    const trackRadio = {
        transform: `translateX(100%)`,
    };

    const trackRadioIgnore = {
        pointerEvents: "none",
    };

    return (
        <div className="player">
            <div className="timeControl">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    style={{
                        background: `linear-gradient(to right, ${
                            currentSong.internetRadio
                                ? graphicColor[1].color[rndNum][0]
                                : currentSong.color[0]
                        }, ${
                            currentSong.internetRadio
                                ? graphicColor[1].color[rndNum][1]
                                : currentSong.color[1]
                        })`,
                        pointerEvents: currentSong.internetRadio && "none",
                    }}
                    className="track"
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"
                    />
                    <div
                        style={
                            currentSong.internetRadio ? trackRadio : trackAnim
                        }
                        className="animateTrack"
                    ></div>
                </div>
                <p>
                    {!songInfo.duration
                        ? "0:00"
                        : songInfo.duration !== Infinity
                        ? getTime(songInfo.duration)
                        : getInternetTime(songInfo.currentTime)}
                </p>
            </div>
            <div className="playControl">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-back")}
                    className="skipBack"
                    icon={faAngleLeft}
                    size="2x"
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    icon={isPlaying ? faPause : faPlay}
                    size="2x"
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler("skip-forward")}
                    className="skipForward"
                    icon={faAngleRight}
                    size="2x"
                />
            </div>
            <div className="heat-slider">
                <div className="heat-bar">
                    <div className="clip"></div>
                </div>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={volumeHandler}
                    value={musicVolume}
                />
            </div>
        </div>
    );
};

export default Player;
