let wheatherKey = config.myApiKey;
const output = document.getElementById("cities");

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

function searchWeather() {
	const city = document.getElementById("searchInput");

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			let test = JSON.parse(this.responseText);
			
			console.log(test);

			output.innerHTML = `<li>The weather in ${test.location.name},${test.location.country}</li>`;
			output.innerHTML += `<li>Last update at: ${test.location.localtime}</li>`;
			output.innerHTML += `<li>${test.current.temp_c}°C</li>`;
			output.innerHTML += `<li>Humidity of ${test.current.humidity}%</li>`;
			
			
			


		}
	});



	xhr.open("GET", `https://weatherapi-com.p.rapidapi.com/current.json?q=${city.value}`);
	xhr.setRequestHeader("X-RapidAPI-Key", wheatherKey);
	xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

	xhr.send(data);
}







