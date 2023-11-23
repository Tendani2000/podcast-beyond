import React from "react";

function Show () {

    const [shows, setShows] = React.useState([]);

    React.useEffect (() => {
        async function getShows () {
            const res = await fetch ("https://podcast-api.netlify.app/shows")
            const data = await res.json();
            setShows(data); 
        }
        getShows();
    }, []);

    return (
        <div>
            <h1>Shows</h1>
            <ul>
                {shows.map(show => (
                    <li key={show.id}>
                        <h2>{show.title}</h2>
                        <p>{show.description}</p>
                        <p>{show.seasons} Seasons</p>
                        <img className="show--image" src={show.image} alt={show.title} />
                        </li>
                ))}
            </ul>
       </div> 

    )}

    export default Show ;