let joke = document.getElementById('jokes');
let jokeBtn = document.querySelector('.jokeBtn');

// initialize copyright
let copyRight = document.getElementById('copyright');

const generateTheJoke = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    const data = await res.json();

    let myUserJoke = '';

    if (data.myUserJoke === undefined) {
        myUserJoke = `${data.setup} <br /> ${data.delivery}`;
    } else {
        myUserJoke = data.myUserJoke;
    }
    joke.innerHTML = myUserJoke;
}

generateTheJoke();

jokeBtn.addEventListener('click', generateTheJoke);


// get fullyear and update copyright
let d = new Date();
copyRight.textContent = d.getFullYear();