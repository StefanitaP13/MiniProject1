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

			output.innerHTML = `<h2>The weather in<br> ${test.location.name}, ${test.location.country} <hr></h2>`;
			output.innerHTML += `<h1 class="fw-bold">${test.current.temp_c}°C <hr> </h1>`;
			output.innerHTML += `<h4 class="fw-lighter">${test.current.condition.text}</h4>`;
			output.innerHTML += `<h4 class="fw-lighter">Feels like ${test.current.feelslike_c}°C</h4>`;
			output.innerHTML += `<h4 class="fw-lighter">Wind direction ${test.current.wind_dir}, <br> with ${test.current.wind_kph} Km/h</h4>`;
			output.innerHTML += `<h4 class="fw-lighter">Humidity of ${test.current.humidity}% <hr></h4>`;
			output.innerHTML += `<h6 class="fw-lighter fst-italic" >Last update at: ${test.location.localtime}</h6>`;
		}

	});



	xhr.open("GET", `https://weatherapi-com.p.rapidapi.com/current.json?q=${city.value}`);
	xhr.setRequestHeader("X-RapidAPI-Key", wheatherKey);
	xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

	xhr.send(data);
	city.value = "";
}







