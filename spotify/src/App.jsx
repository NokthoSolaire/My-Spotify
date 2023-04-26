import './css/App.css';
import Home from './components/Home';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Genres from './components/Genres';
import Navbar from './components/Navbar';
import AlbumX from './components/AlbumX';
import { useEffect, useState } from 'react';

function App() {
  let [page, setPage] = useState("home")

  function changePage(e) {
    console.log(e.currentTarget.textContent)
    if( e.currentTarget.textContent == "Home" ){
      setPage("home");
      console.log("si home",page);
    } else if( e.currentTarget.textContent === "Albums" ) {
      setPage("albums");
      console.log("si albums",page);
    } else if( e.currentTarget.textContent === "Genres" ) {
      setPage("genres");
      console.log("si albums",page);
    } else if (e.currentTarget.textContent === "Artist") {
      setPage("artists");
      console.log("si artists",page);
    }
  }

  function goToAlbum(e) {
    let id = e.currentTarget.id;
    setPage("album" + id);
  }

  if (page === "albums") {
    return (
      <>
     
        <Navbar onClick = {changePage}/>
        <Albums event={goToAlbum}/>
      </>
    );
  } else if(page === "artists") {
    return (
      <>
        <Navbar onClick = {changePage}/>
        <Artists />
      </>
    );
  } else if (page.includes("album")) {
    return (
      <>
        <Navbar onClick = {changePage}/>
        <AlbumX id={page} />
      </>
    )  
  } else if (page === "genres") {
    return (
      <>
        <Navbar onClick = {changePage}/>
        <Genres />
      </>
    );
  } else if (page === "home") {
    return (
      <>
        <Navbar onClick = {changePage}/>
        <Home event={goToAlbum}/>
      </>
    );
  }
}

export default App;
