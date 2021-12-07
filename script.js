document.addEventListener("DOMContentLoaded", function(){



  const _startGameBtn = document.getElementById('start-game');
  const _songPlayer = document.getElementById('song-player');
  const _lyrics = document.getElementById('lyrics');
  const _a = document.querySelector('input[id="a"]');
  const _b = document.querySelector('input[id="b"]');
  const _c = document.querySelector('input[id="c"]');
  const _d = document.querySelector('input[id="d"]');

  var scoreState = 0;

  // Adventure Of A Lifetime, Coldplay
  const fakeLyrics = `Turn your magic on
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

  const SONG = {
    src: 'Mariah_Carey-All_I_Want_for_Christmas_Is_You.mp4',
    lyrics: fakeLyrics,
  };

  const treatLyrics = (lyrics) => {

    // Seperate each sentence and put them in array tokenizedLyrics
    const tokenizedLyrics = lyrics
                                .split('\n')
                                .filter((sentence) => sentence != ''); 

    const randomizedIndex = Math.floor(Math.random() * (tokenizedLyrics.length - 1) + 1);
    // const randomizedIndex = 18;

    const toFindText = tokenizedLyrics[randomizedIndex];

    // console.log('tokenized ::', tokenizedLyrics);
    const lyricsText = tokenizedLyrics
                                .slice(0, randomizedIndex)
                                .join('\n');

    console.log('lyrics cut ::', lyricsText);

    return {
      toFindText,
      lyricsText,
    }
  };

  // Function Start Game
  // Cut lyrics + create correct & wrong answers
  const startGame = (song) => {
    // _songPlayer.src = song.src;
    console.log('Starting game...');

    const { toFindText, lyricsText } = treatLyrics(song.lyrics);

    _lyrics.innerText = lyricsText;
    
    console.log('To find::', toFindText);
    // TODO: random correct letter
    _a.value = toFindText;
    _a.classList.add('correct');

    _b.value = 'Some WRONG answer';
    _b.classList.add('wrong');

    _c.value = 'Another WRONG answer';
    _c.classList.add('wrong');

    _d.value = 'Yet another WRONG answer';
    _d.classList.add('wrong');
  };

  _startGameBtn.addEventListener('click', () => {
    
    startGame(SONG);

    // _songPlayer.play();
    // _songPlayer.pause();
    // answ-c rm hidden
    // document.getElementById('answer-container').classList.remove('hidden');
    // start chrono
  });
});