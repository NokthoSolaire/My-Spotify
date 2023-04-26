import React from 'react'
import getTracks from './getTracks';
import { useState, useEffect } from 'react';



export default function AlbumX(props) {



    const [tracks, setTracks] = useState([]);

   

    let id = props.id.substring(5, props.id.length);
    console.log(id);

    useEffect(() => {
        getTracks(id, setTracks);
        console.log(tracks)
    }, []);

    if(tracks.length === 0){
        return null;
    } else {

        const stopOtherAudios = (currentAudio) => {
            const audios = document.getElementsByTagName('audio');
            for (let i = 0; i < audios.length; i++) {
              if (audios[i] !== currentAudio) {
                audios[i].pause();
                audios[i].currentTime = 0;
              }
            }
            };

        return (
            <div className='album-x-container'>
                 <div key={tracks.album.id} className='album-detail-x'>
                    <img src={tracks.album.cover_small} alt="iiiii"/>
                    <div className='album-info-x'>
                        <h2 className='album-name-x'>{tracks.album.name}</h2>
                        <p className='album-description-x'>{tracks.album.description}</p>
                        <p className="album-popularity-x">{tracks.album.popularity} listenings</p>
                    </div>
                </div> 
                
                {tracks.tracks.map((track,index) => (
                    <div className='track-container'>
                        <div className='album' key={track.id}>
                            <p className='track-name-x'>{track.name}</p>
                            <audio
                                controls
                                src={track.mp3}
                                id={`audio-${index}`}
                                onPlay={(e) => stopOtherAudios(e.target)}
                                
                            />
                                    
                            
                        
                        </div>
                    </div>
                ))}
    
    
            </div>
        );
    }
   
}