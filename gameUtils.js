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

