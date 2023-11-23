import React from 'react';

export default function Header () {
    return (
    <header className='header'>
        <h2 className='header--title'>Podcasts Beyond</h2>
        <div className="search--it">
            <input type="text" placeholder="Search..."></input>
        </div>
    </header>
    )
}