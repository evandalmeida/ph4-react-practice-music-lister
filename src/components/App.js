import React , { useState , useEffect } from "react";
import MusicList from "./MusicList"
import Form from "./Form"


export default function App() {
  const [songs, setSongs] = useState([])

  function addNewSong(newSong) {setSongs([...songs, newSong])}

  function removeSong(deletedSong) {
    setSongs(songs.filter(song => song.id !== deletedSong.id))
  }


  useEffect( () => {
    fetch(`http://localhost:4000/songs`)
    .then(r=>r.json())
    .then(songs=>setSongs(songs))
  }, [])


  return (
    <div className="App">
        <MusicList songs={songs} removeSong={removeSong} />
        <Form addNewSong={addNewSong}/>
    </div>
  );
}