const formEl = document.getElementById("form-el")
const generateBtn = document.getElementById("generate-btn")
const newBtn = document.getElementById("new-btn")
const input1El = document.getElementById("input1-el")
const input2El = document.getElementById("input2-el")

const uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "?", "<", ">"]

let allCharacters = [...uppercaseAlphabet, ...lowercaseAlphabet, ...numbers, ...symbols]
let passwordLength = 15

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault()
})

generateBtn.addEventListener("click", () => {
  for (let i = 0; i < passwordLength; i++) {
    input1El.value += getRandomCharacter()
    input2El.value += getRandomCharacter()
  }
  removeAttr(newBtn)
  setAttr(generateBtn)
  newBtn.focus()
})

newBtn.addEventListener("click", () => {
  input1El.value = ""
  input2El.value = ""
  removeAttr(generateBtn)
  generateBtn.focus()
  setAttr(newBtn)
})

function removeAttr(el) {
  el.removeAttribute("disabled")
}
function setAttr(el) {
  el.setAttribute("disabled", "")
}

function getRandomCharacter() {
  let randomIndex = Math.floor(Math.random() * allCharacters.length)
  return allCharacters[randomIndex]
}