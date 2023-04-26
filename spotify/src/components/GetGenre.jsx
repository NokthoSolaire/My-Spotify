function GetGenre(ressource, setElement, currentPage, itemsPerPage, searchQuery) {
  const searchParam = searchQuery ? `search?query=${searchQuery}&type=genre` : `${ressource}?page=${currentPage}&limit=${itemsPerPage}`;

  fetch(`http://localhost:8000/${searchParam}`)
    .then(response => response.json())
    .then(data => {
      if (searchQuery) {
        setElement(data.genres);
      } else {
        setElement(data);
      }
    })
    .catch(error => console.error(error));
}

export default GetGenre;