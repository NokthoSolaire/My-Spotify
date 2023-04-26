function GetDataRand(ressource, setElement) {
    const randomSeed = Math.random();
    fetch(`http://localhost:8000/albums?&randomSeed=${randomSeed}`)
      .then(response => response.json())
      .then(data => {
        // shuffle the data to get a random order
        const shuffledData = data.sort(() => Math.random() - 0.5);
        setElement(shuffledData);
      })
      .catch(error => console.error(error));
  }
  
  export default GetDataRand;