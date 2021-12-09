document.addEventListener("DOMContentLoaded", function(){

  // ===================================================
  // =============== ELEM from the DOM =================
  // ===================================================

  const _startBtn = document.getElementById('start-game');
  const _lyrics = document.getElementById('lyrics');
  const _answerContainer = document.getElementById('answer-container');
  const _playerId = document.getElementById('player-id');
  const _score = document.getElementById('score');
  const _artist = document.getElementById('artist');
  const _title = document.getElementById('title');
  const _radioInputs = document.querySelectorAll('input[type="radio"]');
  const _result = document.getElementById('result');

  const getCurrentSong = (currentSongId) => { return SONGS[currentSongId]; };
  const displaySongData = (song) => {
    _artist.innerText = song.artist;
    _title.innerText = song.title;
  };

  // Seperate & Return
  // each sentence of lyricsString
  const tokenizeLyrics = (lyricsString) => {
    return lyricsString
          .split('\n')
          .map((l) => l.trim())
          .filter((sentence) => sentence != ''); // TODO: keep paragraphs ? (for maybe slider)
  }

  const makeAndDisplayAnswers = (correct, allLyricsAsTokens) => {
    // Populate radio inputs
    makeAnswerChoices(correct, allLyricsAsTokens);
    _answerContainer.removeAttribute('hidden');
  };
  // ===================================================
  // ================= GAME STATE ======================
  // ===================================================
  
  const SONGS = SONGS_LIST_1;

  var gameState = {
    playerId: 0, // TODO: get PlayerID from session
    score: 0,
    currentSongId: 0,
  };

  var CURRENT_SONG;

  // // Init Game State
  // gameState = Object.assign(gameState, { playerId: 8 });

  const initSong = () => {
    // Re init radio input state
    _radioInputs.forEach((ri) => ri.checked = false );

    // Set Current Song
    CURRENT_SONG = getCurrentSong(gameState.currentSongId);
    // Display artist & title
    displaySongData(CURRENT_SONG);
    // Cut lyrics
    // & get the right Answer
    const { toFindText, lyricsText } = prepareLyricsForGame(tokenizeLyrics(CURRENT_SONG.lyrics));

    // Display the cutted lyrics
    _lyrics.innerText = lyricsText;

    // Return the right answer
    return {
      correctAnswer: toFindText,
      // preparedLyrics: lyricsText,
    }
    
  };

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

                  _result.style.background = 'lightgreen';
                  _result.innerText = 'Well Done!';
                } 
                else {
                  // console.log('Player\'s', radio.value, 'is WRONG');
                  console.log('Player\'s is WRONG');
                  // console.log('ANSWER ::', radio);
                  _result.style.background= 'tomato';
                  _result.innerText = 'Too Bad !';
                }
            };


          });
        });
  }

  // ===================================================
  // ===================  ze GAME  =====================
  // ===================================================
  _startBtn.addEventListener('click', () => {
    
    // Init Game State
    gameState = Object.assign(gameState, { playerId: 8 });
    _playerId.innerText = gameState.playerId;

    const { correctAnswer } = initSong();
    // initGame(SONG);
    // listenToAnswers();

    setTimeout(() => {
      console.log('Times Up ! Now choose...');
      makeAndDisplayAnswers(correctAnswer, tokenizeLyrics(CURRENT_SONG.lyrics));
      listenToAnswers();
    }, 3000);
    
  });

});