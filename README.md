# Phase 4 React Practice - Music Lister
Your goal here is to build a mini-project that'll list your favorite songs.


## Getting Started
First fork and clone the repository. You can start the project with `npm install` and `npm start`.

Be sure to read the whole README before starting since it may be easier to build the core deliverables with the bonus features in mind!


## Requirements
### Songs State
There should be a piece of state, essentially a music list, for song entries. This should be an array of objects, each object representing a song with a title and artist. You may add additional attributes to your songs if you'd like.

### Songs List Component
There ought to be a component that lists all of the songs in the music list. How that is structured (whether you use sub-components or not) is up to you.

### Add Song Form
There ought to be a controlled form in your application that allows you to add a new song to your songs state.

### Delete Song Button
The songs in your songs list component ought to have a delete song button that allows you to remove the song from the songs list.

### BONUS: Persistence
There is already a db.json with this code inside of it:
```
{
  "songs": []
}
```

You may run it with `json-server --watch db.json -p 4000`. When making fetch requests, you'll make them to `http://localhost:4000/songs`.

When making a `POST` request you may use these headers:

```
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
```

When a song gets added or deleted, it persists in the json file. When the application loads, it makes a fetch request with `useEffect` to get the necessary data from the `db.json`.

### BONUS: Styling
Jeez plain old HTML sure looks boring. Style your application! This one is entirely up to you.