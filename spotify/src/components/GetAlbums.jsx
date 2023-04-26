function GetAlbums(ressource, setElement, currentPage, itemsPerPage, searchQuery) {
  const searchParam = searchQuery ? `search?query=${searchQuery}&type=album` : `${ressource}?page=${currentPage}&limit=${itemsPerPage}`;

  fetch(`http://localhost:8000/${searchParam}`)
    .then(response => response.json())
    .then(data => {
      if (searchQuery) {
        setElement(data.albums);
      } else {
        setElement(data);
      }
    })
    .catch(error => console.error(error));
}

export default GetAlbums;