const prepareLyricsForGame = (tokenizedLyrics) => {

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
  
// Function make Random Unique Ids
// Range = range of random numbers possibilities
// OutputLength = how many unique ids we want
// Return : an array of the same length of outputLength, containing the unique ids
function makeRandomUniqueIds(range, outputLength) {

  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let randomIds = [];

  for (let i = 1; i <= outputLength; i++) {
    const random = Math.floor(Math.random() * (range - i));
    randomIds.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return randomIds;
}

// Function makeAnswerChoices
// 1st param : the correct lyrics to find (the correct answer choice)
// 2nd param : the complete lyrics, as an array of sentences
// This function randomly chooses 3 sentences in the complete lyrics array
// which will be the wrong answers
// The correct answer is assigned a random letter (input radio have ids a, b, c and d)
// Then display them all (wrong choices + correct choice) in HTML
// Correct input has an HTML attribute "isCorrect" true ; wrong inputs have the same attribute set to false.
const makeAnswerChoices = (correctText, tokenizedLyrics) => {
    
  // 3 as 2nd parameter
  // because we need only 3 wrong answers for the quizz
  const randomIds = makeRandomUniqueIds(tokenizedLyrics.length, 3);
  
  console.log("rand ids ::", randomIds);
  
  const wrongSentences = [
    tokenizedLyrics[randomIds[0]], // ex: 'We are legends'
    tokenizedLyrics[randomIds[1]], // ex: 'Everything you want's a dream away'
    tokenizedLyrics[randomIds[2]], // ex: 'That's what she told him!'
  ];
  
  console.log("wrongSentences :::", wrongSentences);
  
  // --------------------------- Init Objects ----------------------------
  // LettersList : those will be used later for mapping with input radio id
  const lettersList = [ 'a', 'b', 'c', 'd' ];
  // Init wrong answers list
  const wrongs = [];
  // Init correct object
  // An Array even if only 1 correct possible answer
  // This is so that all answers (wrongs + correct) can be .concat() & .map() over later
  const correct = [];

  // ---------- Init Data Structure for HTML Labels / Inputs --------------
  const answersData = [ 
    { letter: 'a', answerText: '', isCorrect: false }, 
    { letter: 'b', answerText: '', isCorrect: false }, 
    { letter: 'c', answerText: '', isCorrect: false }, 
    { letter: 'd', answerText: '', isCorrect: false },
  ];

  // ----------------- Randomly Assign Answer Choices --------------------
  // Generate a random position (for future input radio value) for correct answer
  // Using number 4 in random calculation
  // because we have 4 answers for the quizz
  const randCorrectId = Math.floor(Math.random() * (4 - 1) + 1);
  
  // console.log("randCorrectId :::", randCorrectId);
  // console.log("rand LETTER :::", lettersList[randCorrectId]);
  
  let currentWrongIndex = wrongSentences.length - 1;
  answersData.map((answer) => {

    if (answer.letter == lettersList[randCorrectId]) {  // Select a random letter thanks to randCorrectId
      console.log("Is correct :::", answer);
      answer.answerText = correctText;
      answer.isCorrect = true;
      correct.push(answer);
      if (correct.length > 1) { console.log('More than 1 correct answer : correct ==', correct); }
    } else {
      // console.log("Wrong sentence at index :::", wrongSentences[currentWrongIndex]);
      answer.answerText = wrongSentences[currentWrongIndex];
      wrongs.push(answer);
      currentWrongIndex -= 1;
      // console.log("Wrong sentence INDEX :::", currentWrongIndex);
    }
  });
  
  // console.log("WRONGS remaining :::", wrongs);
  // console.log("CORRECT found :::", correct);


  // ---------- Set HTML Label + Input for each Answer Choice --------------
  correct
    .concat(wrongs)
    .forEach((dataForLabel) => {
      // console.log('Data for Label ::', dataForLabel);
      const _input = document.querySelector(`#${dataForLabel.letter}`);
      _input.setAttribute('data-is-correct', dataForLabel.isCorrect);
      const _label = document.querySelector(`label[for="${dataForLabel.letter}"]`);
      _label.innerText = dataForLabel.answerText;
    });

};
