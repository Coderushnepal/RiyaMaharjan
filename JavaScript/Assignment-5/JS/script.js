const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "anonymous",
  "syllabus",
  "earth",
  "random",
  "feeling",
  "wreck",
  "pyramid",
  "spectrum",
  "stress",
  "prevent",
  "reform",
  "gene",
  "bark",
  "even",
  "sting",
  "blame",
  "overcharge",
  "get",
  "sequence",
  "herd",
  "restrain",
  "river",
  "reasonable",
  "joke",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);
let playable = true;

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
          </span>
        `
      )
      .join("")}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won!";
    popup.style.display = "flex";
    playable = false;
  }
}

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost.";
    popup.style.display = "flex";

    playable = false;
  }
}

function showNotification() {
  notification.classList.add("show");
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
      playAgain();
    }
  });
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

function startGame(e) {
  if (playable) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
  }
}

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  startGame(e);
});

function playAgain() {
  playable = true;

  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popup.style.display = "none";
}

playAgainBtn.addEventListener("click", () => {
  playAgain();
});

displayWord();