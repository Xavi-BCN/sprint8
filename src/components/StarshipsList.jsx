import axios from "axios";



  
  
  function StarshipsList() {

    axios.get('https://swapi.dev/api/starships/')
        .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

    return (
      <div>Starships_List</div>
    )   
  }
  
  export default StarshipsList