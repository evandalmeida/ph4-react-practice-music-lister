import React from "react";




export default function MusicList({songs, removeSong}) {

    function handleDelete(song){
        const OPTIONS={method: "DELETE"}

        fetch(`http://localhost:4000/songs/${song.id}`, OPTIONS)
        .then(r=>r.json())
        .then(() => removeSong(song))
    }
    
    

    const mappedSongs = songs.map((song) => (
        <div key={song.id}>
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
            <button onClick={(e) => handleDelete(song)}>CLICK TO REMOVE</button>
        </div>
    ))


    return (
        <ul className="songlist">
            <h1>SONG LIST</h1>
            <li>{mappedSongs}</li>
        </ul>
    )
}