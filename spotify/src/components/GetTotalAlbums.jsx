function GetTotalAlbums(setTotalAlbums, searchQuery) {
  
  const searchParam = searchQuery ? `search?query=${searchQuery}&type=album` : "albums";

  fetch(`http://localhost:8000/${searchParam}`)
    .then(response => response.json())
    .then(data => {
      if (searchQuery) {
        setTotalAlbums(data.albums.length);
      } else {
        setTotalAlbums(data.length);
      }
    })
    .catch(error => console.error(error));
}
export default GetTotalAlbums;