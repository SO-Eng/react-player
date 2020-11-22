import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
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
}) => {
    return (
        <div className={`library ${libraryStatus && "activeLibrary"}`}>
            <h2>Library</h2>
            <SearchForm />
            <div className="librarySongs">
                {songs.map((song) => (
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
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
