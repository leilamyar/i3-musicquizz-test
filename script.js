document.addEventListener("DOMContentLoaded", function(){

  // ===================================================
  // =============== ELEM from the DOM =================
  // ===================================================

  const _startBtn = document.getElementById('start-game');
  const _lyrics = document.getElementById('lyrics');
  const _answerContainer = document.getElementById('answer-container');
  const _playerId = document.getElementById('player-id');
  const _score = document.getElementById('score');
  const _radioInputs = document.querySelectorAll('input[type="radio"]');
  
  // ===================================================
  // ================= GAME STATE ======================
  // ===================================================
  
  var gameState = {
    playerId: 18,
    score: 0,
  };

  _playerId.innerText = gameState.playerId;
  _score.innerText = gameState.score;

  // var answerChoices = 0;
  
  // Re init radio input state
  _radioInputs.forEach((ri) => ri.checked = false );

  // ===================================================
  // =============== GAME FUNCTIONS ====================
  // ===================================================

  // Function listenToAnswers
  // Getting all radio inputs, and listen to whenever there're checked
  const listenToAnswers = () => {
    _radioInputs
        .forEach((radio) => {
          radio.addEventListener("change", function(event) {
            let radio = event.target;
            if (radio.checked) {
              if (radio.dataset.isCorrect == "true") { // DATASET stores STRING values ! not BOOLEANS
                  // console.log('Player\'s', radio.value, 'is CORRECT');
                  console.log('Player\'s is CORRECT');
                  // console.log('ANSWER ::', radio);
                  gameState.score += 1;
                  console.log(gameState.score);
                  _score.innerText = gameState.score;
                } 
                else {
                  // console.log('Player\'s', radio.value, 'is WRONG');
                  console.log('Player\'s is WRONG');
                  // console.log('ANSWER ::', radio);
                }
            };
          });
        });
  }

  // Function Start Game
  // Treat lyrics & create correct & wrong answers
  const initGame = (song) => {
    console.log('Starting game...');

    // Seperate each sentence and put them in array tokenizedLyrics
    const tokenizedLyrics = song.lyrics
                              .split('\n')
                              .map((l) => l.trim())
                              .filter((sentence) => sentence != ''); // TODO: keep paragraphs ? (for maybe slider)

    const { toFindText, lyricsText } = prepareLyricsForGame(tokenizedLyrics);
    
    console.log('Lyrics to find ::', toFindText);

    _lyrics.innerText = lyricsText;

    // Populate radio inputs
    makeAnswerChoices(toFindText, tokenizedLyrics);
    // Display the answers choices
    _answerContainer.removeAttribute('hidden');

  };

  // ===================================================
  // ===================  ze GAME  =====================
  // ===================================================
  _startBtn.addEventListener('click', () => {
    
    initGame(SONG);
    listenToAnswers();
    
  });
});