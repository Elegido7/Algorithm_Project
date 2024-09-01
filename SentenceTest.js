function analyzeAndRead(sentence) {
  // Initialize counters set to start at 0.
  let lengthOfSentence = 0;
  let numberOfWords = 0;
  let numberOfVowels = 0;

  // Define the vowels to be identified in either uppercase and lowercase
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    lengthOfSentence++; // Counting the characters in the sentence till the end.

    // Switch case to handle different types of characters
    switch (true) {
      // Check if the character is a vowel
      case vowels.includes(char):
        numberOfVowels++;
        break;

      // Check if the character is a space followed by a non-space (i.e., end of a word)
      case char === ' ' && i > 0 && sentence[i - 1] !== ' ':
        numberOfWords++;
        break;

      // Default case to handle other characters (does nothing special here)
      default:
        break;
    }
  }

  // Since the sentence ends with a point, count the last word (if not just a point)
  if (sentence.length > 1 && sentence[sentence.length - 2] !== ' ') {
    numberOfWords++;
  }

  // Output the results
  console.log('The Length of the sentence is:', lengthOfSentence);
  console.log('The Number of words is:', numberOfWords);
  console.log('The Number of vowels is:', numberOfVowels);
}

// Sentence to test the code
const sentence = 'I will be meeting the CEO of SpaceX, Elon Musk, in the next 24 hours.';
analyzeAndRead(sentence);
