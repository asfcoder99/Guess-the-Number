'use strict';
/*
// project 1 guess my number

console.log(document.querySelector(`.message`).textContent); //used to select the element from the html file and the .textContent is used to extract the text data

//selecting and manipulating elements
document.querySelector(`.message`).textContent = `Correct Number!`; // manipulating the text element basically changing the string
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value); // .value is a new property for manipulating the value of an input field
*/

//Handling click events, Implementing Game logic, Manipulationg CSS styles, Implementing highscore

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math is an object .random is a method that gives a random number between 0 and 1. if we want a number between 0 and 20 we multiply it by 20
//.trunc removes all the decimals
//we add one cause it will never be 20
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //when theres no input
  if (!guess) {
    //document.querySelector(`.message`).textContent = `No Number!`;
    displayMessage(`No Number`);

    //when guessed correct
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    document.querySelector(`.number`).textContent = secretNumber;

    //Implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    document.querySelector(`body`).style.backgroundColor = '#60b347'; //.style to select the style property of the body and backgroundColor is the property that needs to change

    document.querySelector(`.number`).style.width = `30rem`;

    //when guess is different
  } else if (guess !== secretNumber) {
    if (score > 0) {
      //document.querySelector(`.message`).textContent =
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      //document.querySelector(`.message`).textContent = `You Lost!`;
      displayMessage(`You Lost!`);
    }
  }
  /*
    //when guess is high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `Too High!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Lost!`;
    }

    //when guess is low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `Too Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Lost!`;
    }
  }
  */
}); //first we select the button and then using the addevent... to attach an event handler and the event handler is the function and click is the name of the event we are listening to.
// function will not be called when the js file is tun only when the event happens

//coding challenge 1
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector(`.number`).style.width = `15rem`;
});
