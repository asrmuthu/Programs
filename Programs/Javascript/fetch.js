fetch('https://official-joke-api.appspot.com/jokes/programming/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Outputs the data retrieved from the API
    console.log(data[0].type); // Outputs the type of the joke
    console.log(data[0].setup); // Outputs the setup of the joke

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
