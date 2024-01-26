//Made by Adrian Gonzalez
//date:01/14/2024
let word = prompt("What word would you like to enter?");
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

word = word.toLowerCase(); // Convert the word to lowercase

if (!word || word.length === 1) {
    // If the user enters nothing or a single-letter word
    document.write("<h1>Please enter a valid word for translation.</h1>");
} else if (vowels.includes(word[0])) {
    // If the word starts with a vowel
    document.write("<h1>" + word + 'way</h1>');
} else if (consonants.includes(word[0])) {
    if (consonants.includes(word[1])) {
        // If the word starts with two consonants
        let beginsTwoConsonant = word.slice(2) + word[0] + word[1] + 'ay';
        document.write("<h1>" + beginsTwoConsonant + "</h1>");
    } else {
        // If the word starts with a single consonant
        let beginsConsonant = word.slice(1) + word[0] + 'ay';
        document.write("<h1>" + beginsConsonant + "</h1>");
    }
}
