import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import LibrarySong from "./LibrarySong";

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
}) => {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (favoritesChanged) {
            const tempStorage = JSON.parse(localStorage.getItem("favorites"));
            setFavorites(tempStorage);
            setFavoritesChanged(false);
        }
    }, [favoritesChanged]);

    return (
        <div className={`library ${libraryStatus && "activeLibrary"}`}>
            <div className="libraryHeader">
                <h2>Library</h2>
                <SearchForm setSearch={setSearch} />
            </div>
            <div className="favorites">
                <h3>Favorites</h3>
            </div>
            <div
                className={`librarySongsFav ${
                    search.length > 0 && "librarySongsFavCollapsed"
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
                                    setFavoritesChanged={setFavoritesChanged}
                                />
                            )
                    )
                )}
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
                        />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Library;
