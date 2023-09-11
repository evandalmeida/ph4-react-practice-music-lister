import React , {useState} from "react"

export default function Form ({addNewSong}) {

    const [ title , setTitle ] = useState('')
    const [ artist , setArtist ] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        let newSong = {title,artist}
        const OPTIONS={
            method: "POST",
            headers: {
                "Accept":"Application/JSON",
                "Content-Type" : "Application/JSON"
            },
            body: JSON.stringify(newSong)};

            fetch('http://localhost:4000/songs', OPTIONS)
                .then(r=>r.json())
                .then(data => addNewSong(data))
        }

    

    return (
        <> 
            <h1>Add a Song Dude</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={title}/>
                <br/>
                <label htmlFor="artist">Artist</label>
                <input onChange={(e)=>setArtist(e.target.value)}
                    type="text"
                    name="artist"
                    placeholder="Enter Artist"
                    value={artist}/>
                <br/>
                <button>CLICK TO ADD SONG</button>
            </form>
        </>
    )
}