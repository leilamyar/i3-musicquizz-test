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
  
  var scoreState = 0;
  var answerChoices = 0;
  
  // Re init radio input values, because are kept in cache
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

  const makeAnswerChoices = (correctText, tokenizedLyrics) => {
    
    // 3 because we need only 3 Wrong answers for the quizz
    const randomIds = makeRandomUniqueIds(tokenizedLyrics.length, 3);

    console.log("rand ids ::", randomIds);

    const wrongSentences = [
                              tokenizedLyrics[randomIds[0]], // ex: 'We are legends'
                              tokenizedLyrics[randomIds[1]], // ex: 'Everything you want's a dream away'
                              tokenizedLyrics[randomIds[2]], // ex: 'That's what she told him!'
                            ];
   
    console.log("wrongSentences :::", wrongSentences);
    
    // const answers = { 1: '', 2: '', 3: '', 4: '' };
    // const answers = { a: '', b: '', c: '', d: '' };
    const answers = [ { letter: 'a', answerText: '', isCorrect: false }, { letter: 'b', answerText: '', isCorrect: false }, { letter: 'c', answerText: '', isCorrect: false }, { letter: 'd', answerText: '', isCorrect: false } ];
    // const answers = [ a, b, c, d ];
    // const wrongSentences = [ { a: 0 } , {  b: 0 }, {c: 0 }, {d: 0 } ];
    // const answers = { a: '', b: '', c: '', d: '' };
    // const answers = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
    const randAnswerIds = makeRandomUniqueIds(4, 4);
    // ex:  [ 2, 1, 3, 4 ]
    // So in ex, randAnswerIds[0] is equal to 2
    // So in ex, randAnswerIds[1] is equal to 1
    // So in ex, randAnswerIds[2] is equal to 3
    // So in ex, randAnswerIds[3] is equal to 4

    console.log("randAnswerIds :::", randAnswerIds);
    const _a = document.querySelector('label[for="a"]');
    const _b = document.querySelector('label[for="b"]');
    const _c = document.querySelector('label[for="c"]');
    const _d = document.querySelector('label[for="d"]');


    console.log("answers :::", answers[1]);
    // console.log("answers :::", answers);

    // Setting all answers :
    // WRONG
    answers[randAnswerIds[0]].answerText = wrongSentences[0];
    answers[randAnswerIds[1]].answerText = wrongSentences[1];
    answers[randAnswerIds[2]].answerText = wrongSentences[2];
    // CORRECT
    answers[randAnswerIds[3]].answerText = correctText;
    answers[randAnswerIds[3]].isCorrect = true;
    
  
    // answers.forEach(({ letter, answerText, isCorrect }) => {
    //   const _a = document.querySelector('label[for="a"]');
    //   const _label = document.querySelector(`label[for="${letter}"]`);
    //   _label.innerText = answerText;
    //   _label.setAttribute('data-is-correct', isCorrect);
    // });

    // _a.innerText = answers.a;
    // _a.setAttribute('data-is-correct', true);

    // _b.value = choice1;
    // _b.setAttribute('data-is-correct', false);

    // _c.value = choice2;
    // _c.setAttribute('data-is-correct', false);

    // _d.value = choice3;
    // _d.setAttribute('data-is-correct', false);
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

    // NOK makeAnswerChoices(toFindText, tokenizedLyrics);
    makeAnswerChoices2(toFindText, tokenizedLyrics);
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