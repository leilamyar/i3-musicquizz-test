document.addEventListener("DOMContentLoaded", function(){

  // ===================================================
  // =============== ELEM from the DOM =================
  // ===================================================
  const _startGameBtn = document.getElementById('start-game');
  const _lyrics = document.getElementById('lyrics');
  const _answerContainer = document.getElementById('answer-container');
  const _a = document.querySelector('input[id="a"]');
  const _b = document.querySelector('input[id="b"]');
  const _c = document.querySelector('input[id="c"]');
  const _d = document.querySelector('input[id="d"]');
  const _radioInputs = document.querySelectorAll('input[type="radio"]');
  _radioInputs.forEach((ri) => ri.checked = false );

  // ===================================================
  // ================= GAME STATE ======================
  // ===================================================

  var scoreState = 0;
  var answerChoices = 0;


  // ===================================================
  // =============== GAME FUNCTIONS ====================
  // ===================================================

  // Function listenToAnswers
  // Getting all checkboxes, and listen to whenever there're checked
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
  
  // Function generateWrongAnswers
  // From the whole lyrics text of a song,
  // randomly take 3 sentences (to populate wrong answers text)

  const generateWrongAnswers = (tokens) => {

    // let randTokenId = Math.floor(Math.random() * (tokens.length - 1) + 1);
    const randSentences = { a: '', b: '', c: '' };

    if (condition) {
      
    } else {
      
    }

    randSentences.push(tokens[id]);
 
    return randSentences;
  };

  const makeAnswerChoices = (correctText, tokenizedLyrics) => {
    
    // 3 because we need only 3 Wrong answers for the quizz
    const randomIds = makeRandomUniqueIds(tokenizedLyrics.length, 3);

    console.log("rand ids ::", randomIds);

    const b = tokenizedLyrics[randomIds[0]];
    const c = tokenizedLyrics[randomIds[1]];
    const d = tokenizedLyrics[randomIds[2]];

   
    console.log("b", b);
    console.log("c:::", c);
    console.log("d :::", d);
    // TODO: random correct letter
    // const randomCorrect = 'b';

    _a.value = correctText;
    _a.setAttribute('data-is-correct', true);

    _b.value = b;
    _b.setAttribute('data-is-correct', false);

    _c.value = c;
    _c.setAttribute('data-is-correct', false);

    _d.value = d;
    _d.setAttribute('data-is-correct', false);
  };
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

    makeAnswerChoices(toFindText, tokenizedLyrics);
    
    _answerContainer.removeAttribute('hidden');



  };

  // ===================================================
  // ===================  ze GAME  =====================
  // ===================================================
  _startGameBtn.addEventListener('click', () => {
    
    initGame(SONG);
    listenToAnswers()
    
  });
});