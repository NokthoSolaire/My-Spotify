import React from 'react';
import GetDataRand from './GetDataRand';
import { useState, useEffect } from 'react';
import getTotalAlbums from './GetTotalAlbums';
import icon from '../css/assets/logo.png';

export default function Albums(props) {

    const [albums, setAlbums] = useState([]);
    const [totalAlbums, setTotalAlbums] = useState(0);
    
    useEffect(() => {
      GetDataRand("albums", setAlbums);
      getTotalAlbums(setTotalAlbums);
    }, []);
  
  
    return (
        <div className='album-container home'>
        <div className='header'>
          <img className='logo' src={icon} alt="icon" />
          <h1 className='title'>Spotify</h1>
        </div>
        <div className='albums'>
          {albums.map(album => (
            <div className='album' key={album.id}>
              <div className='album-info'>
                <div className='album-avatar'>
                  <img src={album.cover_small} alt="avatar" />
                </div>
                <h2 className='album-name'>{album.name}</h2>
              </div>
              <div className='album-detail'>
                <p>{album.description}</p>
              </div>
              <button className='button-go' id={album.id} onClick={props.event}> Go to album </button>
            </div>
          ))}
        </div>
       
      </div>
    );
  }