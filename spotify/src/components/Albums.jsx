import React from 'react'
import GetAlbums from './GetAlbums';
import { useState, useEffect } from 'react';
import GetTotalAlbums from './GetTotalAlbums';
import { FiSearch } from 'react-icons/fi';


export default function Albums(props) {

    const [albums, setAlbums] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalAlbums, setTotalAlbums] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(() => {
      GetAlbums("albums", setAlbums, currentPage, itemsPerPage, searchQuery);
      GetTotalAlbums(setTotalAlbums, searchQuery);
    }, [currentPage, itemsPerPage, searchQuery]);

    useEffect(() => {
      setCurrentPage(1);
    }, [searchQuery]);
  
    const totalPage = Math.ceil(totalAlbums / itemsPerPage);
  
    return (
      <div className='album-container'>
        <div className='header'>
          <h1 className='title'>Albums {totalAlbums}</h1>
          <div className='search-container'>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search albums..." />
            <FiSearch />
          </div>
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
              <button className='button-go' id={album.id} onClick={props.event}> Show details </button>
            </div>
          ))}
        </div>
        <div className='footer'>
          <div className='pagination'>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1 || searchQuery}>Previous</button>
          <p className='current-page'>Page {currentPage}</p>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPage || searchQuery}>Next</button>
          </div>
        </div>
      </div>
    );
  }