


let wheatherKey = config.myApiKey;

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/current.json?q=Braila");
xhr.setRequestHeader("X-RapidAPI-Key", wheatherKey);
xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

xhr.send(data);

console.log(data);

