import React, { useEffect } from "react";

const Song = ({
    currentSong,
    songChanged,
    setSongChanged,
    setRndNum,
    isPlaying,
}) => {
    const [cover, setCover] = React.useState("");

    useEffect(() => {
        if (currentSong.internetRadio && songChanged) {
            const num = Math.floor(Math.random() * 7) + 1;
            setRndNum(num - 1);
            setCover(currentSong.cover[num - 1]);
            setSongChanged(false);
        }
        if (!currentSong.internetRadio && songChanged) {
            setCover(currentSong.cover);
            setSongChanged(false);
        }
    });

    return (
        <div className="songContainer">
            <div className="vinylHole"></div>
            {/* <div className="vinylCover"></div> */}
            <img
                className={isPlaying ? "song-playing" : ""}
                src={cover}
                alt={currentSong.name}
            />
            <h2>{currentSong.name}</h2>
            <h3>
                {currentSong.internetRadio
                    ? `BitRate: ${currentSong.artist}kbit/s`
                    : currentSong.artist}
            </h3>
        </div>
    );
};

export default Song;
