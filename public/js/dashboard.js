const createTripBtn = document.querySelector('#create-trip');

async function createTrip(event) {
  event.preventDefault();

  const tripNameValue = document.querySelector('#trip-name').value.trim();
  const destinationValue = document.querySelector('#destination').value.trim();

  const newTrip = {
    name: tripNameValue,
    destination: destinationValue,
  };
  //   console.log(newTrip);
  const response = await fetch('/api/trips/create', {
    body: JSON.stringify(newTrip),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('createTrip WORKED!');
    document.location.replace('/flightInfo');
  } else {
    console.log('createTrip screwed up again');
  }
}

createTripBtn.addEventListener('click', createTrip);
