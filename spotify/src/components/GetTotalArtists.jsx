function GetTotalArtists(setTotalArtists, searchQuery) {
  
  const searchParam = searchQuery ? `search?query=${searchQuery}&type=artist` : "artists";

  fetch(`http://localhost:8000/${searchParam}`)
    .then(response => response.json())
    .then(data => {
      if (searchQuery) {
        setTotalArtists(data.artists.length);
      } else {
        setTotalArtists(data.length);
      }
    })
    .catch(error => console.error(error));
}
export default GetTotalArtists;