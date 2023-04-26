import React, { useState, useEffect } from 'react';


function Navbar(props) {

    
    return (
        <div className='navbar'>
            <button onClick={props.onClick}>Home</button>
            <button onClick={props.onClick}>Genres</button>
            <button onClick={props.onClick}>Artist</button>
            <button onClick={props.onClick}>Albums</button>
        </div>

    );
}

export default Navbar;