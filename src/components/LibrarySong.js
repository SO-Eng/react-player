import React, { useEffect, useState } from "react";
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
    setFavoritesChanged,
}) => {
    const favoriteName = localStorage.getItem("favorites");
    // const [currentStorage, setCurrentStorage] = useState([]);
    // const [tempStorage, setTempStorage] = useState([]);

    // useEffect(() => {
    //     const getStorage = localStorage.getItem("favorites");
    //     if (getStorage?.length > 0) {
    //         setCurrentStorage(localStorage.getItem("favorites"));
    //     }
    // }, [currentStorage]);

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

    const favoriteHandler = (station) => {
        const tempStorage = JSON.parse(localStorage.getItem("favorites"));

        if (tempStorage?.length === 0 || tempStorage === null) {
            var temp = [station];
            localStorage.setItem("favorites", JSON.stringify(temp));
        } else {
            if (tempStorage?.includes(station)) {
                var temp2 = tempStorage.filter((item) => item !== station);
                localStorage.setItem("favorites", JSON.stringify(temp2));
            } else {
                var temp3 = [...tempStorage, station];
                localStorage.setItem("favorites", JSON.stringify(temp3));
            }
        }
        setFavoritesChanged(true);
    };

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
                            onClick={() => favoriteHandler(song.name)}
                            // onClick={() => test()}
                            className={
                                favoriteName?.includes(song.name)
                                    ? "favoriteStarSelected"
                                    : "favoriteStar"
                            }
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
