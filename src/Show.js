import React, { useState } from "react";

function Show () {

    const [shows, setShows] = React.useState([]);
    const [sortOrder, setSortOrder]= useState("asc");

    React.useEffect (() => {
        async function getShows () {
            const res = await fetch ("https://podcast-api.netlify.app/shows")
            const data = await res.json();
            setShows(data); 
        }
        getShows();
    }, []);

    const handleSortChange = () => {
        setSortOrder ((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    const sortedShows = [...shows].sort ((a,b) => {
        if (sortOrder === "asc") {
            return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            
        }
    })

    return (
        <div>
            <h1>Shows</h1>
            <button className="A-Z" onClick={handleSortChange}>
            {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </button>
            <ul>
                {sortedShows.map(show => (
                    <li key={show.id}>
                        <h2 className="show--title">{show.title}</h2>
                        <p className="show--desc">{show.description}</p>
                        <p>{show.seasons} Seasons</p>
                        <img className="show--image" src={show.image} alt={show.title} />
                        <p>Updated {show.updated}</p>
                        </li>
                ))}
            </ul>
       </div> 

    )
}

    export default Show ;