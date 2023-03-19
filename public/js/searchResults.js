const elem = document.querySelectorAll('[datas2 = "display"]');
let j = 1;
for (let i = 0; i < elem.length; i++) {
  // set id value
  elem[i].id = `value${j}`;
  console.log(elem[i].id);
  j++;
}

const addFlightBtn = document.querySelector('#add-flight');
async function createFlight(event) {
  event.preventDefault();

  const departureText = document.querySelector('#departure').textContent;
  const arrivalText = document.querySelector('#arrival').textContent;
  const arrivalTimeText = document.querySelector('#arrival-time').textContent;
  const priceText = document.querySelector('#price').textContent;
  const userId = document.querySelector('.user-id').id;
  const newFlight = {
    departure: departureText,
    arrival: arrivalText,
    arrivalTime: arrivalTimeText,
    price: priceText,
    user_id: userId,
  };
  console.log(newFlight);
  const response = await fetch('/api/flights/create', {
    body: JSON.stringify(newFlight),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('createFlight WORKED!');
    document.location.replace('/dashboard');
  } else {
    console.log('createFlight screwed up again');
  }
}

addFlightBtn.addEventListener('click', createFlight);
