const weatherForm = document.querySelector('#addressForm');
const messagePara = document.querySelector('#message');
const locationName = document.querySelector('#locationName');
const weatherDetails = document.querySelector('#weatherDetails');
weatherDetails.textContent = '';
locationName.textContent = '';
messagePara.textContent =
  'Use this app to get weather of any location around the world';
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = document.querySelector('#address');
  const city = searchTerm.value;
  fetch(`/weather/?address=${city}`).then((response) => {
    response.json().then((data) => {
      const { message, name, main } = data;
      messagePara.textContent = message;
      locationName.textContent = name;
      if (main) {
        const { temp, feels_like, pressure } = main;
        weatherDetails.textContent = ` the tempreature is : ${(
          feels_like - 272.15
        ).toFixed(2)}`;
      }
    });
  });
});
