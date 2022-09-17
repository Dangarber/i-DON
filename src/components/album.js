 import axios from "axios";
import React from "react";
export default function Album(){
    /*
     * This line below tells react we want to save some data
     * in the component. albumData is the name of a new variable for 
     * the data, setAlbum is the name of a new function 
     * to save new data
     */
    const [albumData, setAlbum] = React.useState();
    /*
    Use effect is a special function called a Hook. this will allow
    the component to reload when new data comes in.
     */
    React.useEffect(()=>{
        axios.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=aae51f94ff1fca06d4905b444dc74b9c&artist=Radiohead&album=OKcomputer&format=json')
    .then(
        // here I am calling the setAlbum function to the response data
        resp=> {setAlbum(resp.data.album)})
    });
return <div>
    {/* The ? prevents an error if albumData is null */}
    <div>Artist: {albumData?.artist}</div>
    <div>Name: {albumData?.name}</div>
    <p>{JSON.stringify(albumData)}</p>
    </div>
}