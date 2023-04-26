
function getTracks(id, setTracks) {

    fetch(`http://localhost:8000/albums/${id}`)
      .then(response => response.json())
      .then(data => setTracks(data))
      .catch(error => console.error(error));
  
  }
  export default getTracks;