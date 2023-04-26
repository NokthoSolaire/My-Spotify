function GetArtist(ressource, setElement, currentPage, itemsPerPage, searchQuery) {
  const searchParam = searchQuery ? `search?query=${searchQuery}&type=artist` : `${ressource}?page=${currentPage}&limit=${itemsPerPage}`;

  fetch(`http://localhost:8000/${searchParam}`)
    .then(response => response.json())
    .then(data => {
      if (searchQuery) {
        setElement(data.artists);
      } else {
        setElement(data);
      }
    })
    .catch(error => console.error(error));
}

export default GetArtist;