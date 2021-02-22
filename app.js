let joke = document.getElementById('jokes');
let jokeBtn = document.querySelector('.jokeBtn');

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
