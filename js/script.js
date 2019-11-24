let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function(){

	let data = JSON.parse(this.response);

	if (request.status >=200 && request.status < 400){

		data.forEach(movie=>{

			const card = document.createElement('div');
			card.setAttribute('class','card');

// FOR THE TITLE

			const h1 = document.createElement('h1');
			h1.textContent = movie.title;


// FOR THE INTRO

const p = document.createElement('p');
movie.description = movie.description.substring(0,300);
p.textContent = `${movie.description}...`;
container.appendChild(card);


card.appendChild(h1);
card.appendChild(p);
			console.log(movie.title);
			console.log(movie.description)
		})
	}else{

		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Gah! its not working!`;
		app.appendChild(errorMessage);
		console.log('error')
	}

}

request.send();


const app = document.getElementById('root');

const logo= document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');

container.setAttribute('class', 'container');


app.appendChild(logo);
app.appendChild(container);





// fetch('https://ghibliapi.herokuapp.com/films')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     console.log(data)
//   })
//   .catch(err => {
//     // Do something for an error here
//   })