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
  // =============== DATA from Database ================
  // ===================================================
  // Lyrics Example
  // Adventure Of A Lifetime by Coldplay
  const lyrics = `Turn your magic on
  To me she'd say
  Everything you want's a dream away
  We are legends
  Every day
  That's what she told him!

  Turn your magic on
  To me she'd say
  Everything you want's a dream away
  Under this pressure, under this weight
  We are diamonds

  I feel my heart beating
  I feel my heart beneath my skin
  I feel my heart beating


  Ohhh, you make me feel
  Like I'm alive again
  Alive again
  Ohhh, you make me feel
  Like I'm alive again

  Said I can't go on, not in this way
  I'm a dream, I die by light of day
  Gonna hold up half the sky and say
  Ohhh, we are omen

  I feel my heart beating
  I feel my heart beneath my skin
  Ohhh, I can feel my heart beating
  Cause you make me feel
  Like I'm alive again
  Alive again...

  Ohhh, you make me feel
  Like I'm alive again

  Turn your magic on, to me she'd say
  Everything you want's a dream away
  Under this pressure, under this weight

  We are diamonds taking shape!
  We are diamonds taking shape!

  If we've only got this life
  Then this adventure, more than I
  And if we've only got this life
  You'll get me through alive
  And if we've only got this life
  Then this adventure, more than I
  Wanna share with you
  With you, with you

  I said, oh, say oh

  Woo hoo, woo hoo...`

  // MOCK song object
  const SONG = {
    title: 'Adventure Of A Lifetime',
    artist: 'Coldplay',
    lyrics,
  };


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

  const treatLyrics = (lyrics) => {

    // Seperate each sentence and put them in array tokenizedLyrics
    const tokenizedLyrics = lyrics
                                .split('\n')
                                .map((l) => l.trim())
                                .filter((sentence) => sentence != ''); // TODO: keep paragraphs ? (for maybe slider)

    const randomizedIndex = Math.floor(Math.random() * (tokenizedLyrics.length - 1) + 1);
    // const randomizedIndex = 18;

    const toFindText = tokenizedLyrics[randomizedIndex];

    // console.log('tokenized ::', tokenizedLyrics);
    const lyricsText = tokenizedLyrics
                                .slice(0, randomizedIndex)
                                .join('\n');

    // console.log('lyrics cut ::', lyricsText);

    return {
      toFindText,
      lyricsText,
    }
  };

  const makeAnswerChoices = (correctText) => {
    // TODO: random correct letter
    // const randomCorrect = 'b';

    _a.value = correctText;
    _a.setAttribute('data-is-correct', true);

    _b.value = 'Some WRONG answer';
    _b.setAttribute('data-is-correct', false);

    _c.value = 'Another WRONG answer';
    _c.setAttribute('data-is-correct', false);

    _d.value = 'Yet another WRONG answer';
    _d.setAttribute('data-is-correct', false);
  };
  // Function Start Game
  // Treat lyrics & create correct & wrong answers
  const initGame = (song) => {
    // _songPlayer.src = song.src;
      console.log('Starting game...');
    
    const { toFindText, lyricsText } = treatLyrics(song.lyrics);
    
      console.log('Lyrics to find ::', toFindText);

    _lyrics.innerText = lyricsText;

    makeAnswerChoices(toFindText);
    
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