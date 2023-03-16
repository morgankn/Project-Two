const origin = document.querySelector('#departure').value;
function searchFlight() {
  // queryselect Searchflight origin destination ect. get values
  // event.target.dataset.code
  // location.href = `/search?searchflight=${searchflight}&origin=${origin}&destination=${destination}&departureDate=${departureDate}&arriveTo=${arriveTo}&currency=${currency}`;
  console.log('You went nowhere');
  console.log(origin);
}

// onclick run dearchflight

const findButton = document.querySelector('#find-button');
findButton.addEventListener('click', (event) => {
  searchFlight();
});

const apiKey= "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYjgwNTg0ZGJmYjM3MDZkYTgzYWE5NDk5MWI2ZmRhNTU1OWFhZDcwODk0NDQ3MjEwYjUxZTExNjg0MTM0YjliZGE0ZTZiY2U2ZWFkM2RjZWIiLCJpYXQiOjE2NzgxNTI3OTcsIm5iZiI6MTY3ODE1Mjc5NywiZXhwIjoxNzA5Nzc1MTk3LCJzdWIiOiIyMDM3MCIsInNjb3BlcyI6W119.phz97niBhwWXsU-Aoib62aD9r3r6I1_TXp1GiOd5JJR0gTf1nxou0RXjr3wm7fL-cA6uGlyLj8Af6z8NUVPRGw"

const exampleFetch = async (req, res) => {
  await fetch(
    `https://app.goflightlabs.com/search-all-flights?access_key=${apiKey}&adults=1&origin=MAD&destination=FCO&departureDate=2023-03-21`
  );
  console.log('congrats');
  console.log(res);
};

const exampleButton = document.querySelector('#example-button');
exampleButton.addEventListener('click', (event) => {
  exampleFetch();
});
