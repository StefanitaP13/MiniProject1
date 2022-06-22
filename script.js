console.log("test");






const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25");
xhr.setRequestHeader("X-RapidAPI-Key", "5ae7b41180msh097817e8ff237c7p10f974jsnc261e0995a5a");
xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

xhr.send(data);




