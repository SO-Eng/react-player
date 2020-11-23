import React from "react";
import Vinyl from "../images/vinyl-blue.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LibrarySong = ({
    song,
    setCurrentSong,
    audioRef,
    isPlaying,
    songs,
    setSongs,
    id,
    setSongChanged,
}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // Add active State
        const newSong = songs.map((song) => {
            if (song.id === id) {
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
        // check if the song is playing
        if (isPlaying) {
            audioRef.current.play();
        }
        setSongChanged(true);
    };

    const favoriteHandler = () => {};

    return (
        <div
            onClick={songSelectHandler}
            className={`librarySong ${song.active && "selected"}`}
        >
            <img
                src={song.internetRadio ? Vinyl : song.cover}
                alt={song.name}
            />
            <div className="textContainer">
                <div className="textStarDivider">
                    <div className="songDescription">
                        <h3>{song.name}</h3>
                        <h4>{song.artist}</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            onClick={favoriteHandler}
                            className="favoriteStar"
                            icon={faStar}
                            size="1x"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibrarySong;
