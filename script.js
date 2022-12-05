let string = window
  .prompt("Provide text to convert")
  .toLowerCase()
  .replace(/[^a-z]/gi, "")
  .split("");

let replaced = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function alphabetPosition() {
  for (let i = 0; i < string.length; i++) {
    replaced.push(alphabet.indexOf(string[i]) + 1);
  }

  replaced = replaced.join(" ");
  window.alert(replaced);
}

alphabetPosition();
