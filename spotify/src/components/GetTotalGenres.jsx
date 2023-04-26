function GetTotalGenres(setTotalGenres, searchQuery) {

  const searchParam = searchQuery ? `search?query=${searchQuery}&type=genre` : "genres";

  fetch(`http://localhost:8000/${searchParam}`)
    .then(response => response.json())
    .then(data => {
      if (searchQuery) {
        setTotalGenres(data.genres.length);
      } else {
        setTotalGenres(data.length);
      }
    })
    .catch(error => console.error(error));
}
export default GetTotalGenres;