/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

/*export default*/ function correctSentence(text) {
  if(!(isNaN(text.charAt(0) * 1))) {
    console.log("Your sentence starts with a number.");
    return -1;
  }
  if(text.charAt(0) == text.charAt(0).toLowerCase()) {
    let temp = text.slice(1);
    text = text.charAt(0).toUpperCase() + temp;
  }
  if(text.charAt(text.length - 1) != ".") {
    text = text + ".";
  }
  return text;
}

console.log(correctSentence("Greetings, friends."));
