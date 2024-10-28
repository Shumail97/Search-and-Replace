function replaceWord(sentence, before, after) {
    // Create a regular expression to find the 'before' word
    const regex = new RegExp(before, 'gi'); // 'g' for global, 'i' for case-insensitive

    // This function will decide how to change the case of the 'after' word
    const casePreservingReplace = (match) => {
        if (match === match.toUpperCase()) {
            // If the original word is all uppercase, make 'after' uppercase
            return after.toUpperCase();
        } else if (match[0] === match[0].toUpperCase()) {
            // If the original word starts with a capital letter, capitalize 'after'
            return after.charAt(0).toUpperCase() + after.slice(1);
        } else {
            // If the original word is all lowercase, make 'after' lowercase
            return after.toLowerCase();
        }
    };

    // Replace the word in the sentence using the regex and the case-preserving function
    return sentence.replace(regex, casePreservingReplace);
}

// Example usage:
const sentence = "The Book is on the table.";
const before = "Book";
const after = "dog";

const newSentence = replaceWord(sentence, before, after);
console.log(newSentence); 
