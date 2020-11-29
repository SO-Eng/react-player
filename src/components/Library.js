import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Library = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    libraryStatus,
    setSongChanged,
    favoritesChanged,
    setFavoritesChanged,
    setIsPlaying,
}) => {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [favoritesOpen, setFavoritesOpen] = useState(true);

    const handleFavoritesList = () => {
        setFavoritesOpen(!favoritesOpen);
    };

    useEffect(() => {
        if (favoritesChanged) {
            const tempStorage = JSON.parse(localStorage.getItem("favorites"));
            setFavorites(tempStorage);
            setFavoritesChanged(false);
        }
    }, [favoritesChanged, setFavoritesChanged]);

    return (
        <div className={`library ${libraryStatus && "activeLibrary"}`}>
            <div className="libraryHeader">
                <h2>Library</h2>
                <SearchForm setSearch={setSearch} />
            </div>
            <div className="favorites">
                <div className="favoritesHeader" onClick={handleFavoritesList}>
                    <h3>Favorites</h3>
                    <FontAwesomeIcon
                        className="favoritesCollapse"
                        icon={favoritesOpen ? faChevronDown : faChevronUp}
                        size="1x"
                    />
                </div>
                <div
                    className={`librarySongsFav ${
                        search.length > 0
                            ? "librarySongsFavCollapsed"
                            : !favoritesOpen && "librarySongsFavCollapsed"
                    }`}
                >
                    {songs.map((song) =>
                        favorites?.map(
                            (favo) =>
                                song.name === favo && (
                                    <LibrarySong
                                        setCurrentSong={setCurrentSong}
                                        song={song}
                                        audioRef={audioRef}
                                        isPlaying={isPlaying}
                                        songs={songs}
                                        setSongs={setSongs}
                                        key={song.id}
                                        id={song.id}
                                        setSongChanged={setSongChanged}
                                        setFavoritesChanged={
                                            setFavoritesChanged
                                        }
                                        setIsPlaying={setIsPlaying}
                                    />
                                )
                        )
                    )}
                </div>
                <div className="favoritesFooter"></div>
            </div>
            <div className="collection">
                <h3>Collection</h3>
            </div>
            <div className="librarySongs">
                {songs.map((song) =>
                    song.name?.toLowerCase().includes(search) ? (
                        <LibrarySong
                            setCurrentSong={setCurrentSong}
                            song={song}
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                            songs={songs}
                            setSongs={setSongs}
                            key={song.id}
                            id={song.id}
                            setSongChanged={setSongChanged}
                            setFavoritesChanged={setFavoritesChanged}
                            setIsPlaying={setIsPlaying}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Library;
