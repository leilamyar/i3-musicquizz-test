document.addEventListener("DOMContentLoaded", function(){

  // ===================================================
  // =============== ELEM from the DOM =================
  // ===================================================

  const _startGameBtn = document.getElementById('start-game');
  const _lyrics = document.getElementById('lyrics');
  const _answerContainer = document.getElementById('answer-container');
  const _radioInputs = document.querySelectorAll('input[type="radio"]');
  
  // ===================================================
  // ================= GAME STATE ======================
  // ===================================================
  
  var gameState = {
    playerId: 18,
    score: 0,
  };
  // var answerChoices = 0;
  
  // Re init radio input state
  _radioInputs.forEach((ri) => ri.checked = false );

  // ===================================================
  // =============== GAME FUNCTIONS ====================
  // ===================================================

  // Function listenToAnswers
  // Getting all radio inputs, and listen to whenever there're checked
  const listenToAnswers = () => {
    document.querySelectorAll("input")
        .forEach((radio) => {
          radio.addEventListener("change", function(event) {
            let radio = event.target;
            if (radio.checked) {
              console.log('checked answer is correct ? :', radio.dataset.isCorrect);
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
  _startGameBtn.addEventListener('click', () => {
    
    initGame(SONG);
    listenToAnswers();
    
  });
});