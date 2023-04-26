function GetData(ressource, setElement, currentPage, itemsPerPage) {

  fetch(`http://localhost:8000/${ressource}?page=${currentPage}&limit=${itemsPerPage}`)
    .then(response => response.json())
    .then(data => setElement(data))
    .catch(error => console.error(error));

}
export default GetData;