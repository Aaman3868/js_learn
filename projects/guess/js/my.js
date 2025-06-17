let random = parseInt(Math.random() * 100 + 1);
const submits = document.querySelector('#submits');
const userinput = document.querySelector('#guessfield');
const slot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const resultPerson = document.querySelector('.resultPerson');
const p = document.createElement('p');

let prev = [];
let totalguess = 1;
let playegame = true;

if (playegame) {
    submits.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        if (playegame) validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    prev.push(guess);
    displayguess(guess);
    checkguess(guess);

    if (totalguess > 5 && guess !== random) {
        displaymessage("Game Over");
        endgame();
    }
}

function checkguess(guess) {
    if (guess === random) {
        displaymessage("You Win 🎉");
        endgame();
    } else if (guess < random) {
        displaymessage("Too low 📉");
    } else {
        displaymessage("Too high 📈");
    }
}

function displayguess(guess) {
    userinput.value = '';
    slot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${5 - totalguess}`;
    totalguess++;
}

function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function newgame() {
    const newgames = document.querySelector('#newgame');
    newgames.addEventListener('click', function () {
        random = parseInt(Math.random() * 100 + 1);
        prev = [];
        totalguess = 1;
        slot.innerHTML = '';
        remaining.innerHTML = `5`;
        loworhi.innerHTML = '';
        userinput.removeAttribute('disabled');
        resultPerson.removeChild(p);
        playegame = true;
    });
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = "<span id='newgame' style='cursor:pointer;color:blue;'>Start New Game</span>";
    resultPerson.appendChild(p);
    playegame = false;
    newgame();
}
