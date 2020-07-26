var solved="";

var intro = "Hello. Welcome to the Caeser Cipher encrypter. Here, you can \nencrypt/decrypt your message by entering it in the input box.\nHowever, please be aware that this encrypter only uses the \n13-shift default value of Caeser Cipher."
var introFont;

var userInput, userInputVal, encryptButton, decryptButton;
var cryptType;

function preload() {
  introFont = loadFont("simplifica.ttf")
}

function setup() {
  createCanvas(600, 600);

  createUserSpace();
}

function draw() {
  background("white");

  encryptButton.mousePressed(encryptPress);

  if (solved !== null) {
    textFont(introFont);
    fill("black");
    textSize(35);
    text(solved, 40, 290)
  }

  textFont(introFont);
  fill("black");
  textSize(35);
  text(intro, 5, 40);
}


function cipherEncrypt(str) {
  for (var i=0; i < str.length; i++) {
    let asciiNum = str[i].charCodeAt();

    if (asciiNum >= 65 && asciiNum <= 77)  {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90)  {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += String.fromCharCode(asciiNum)
    }
  }

  console.log(solved)
}

function createUserSpace() {
  userInput = createInput();
  userInput.size(200, 30);
  userInput.position(200, 330);

  encryptButton = createButton("SOLVE");
  encryptButton.size(190, 20);
  encryptButton.position(210, 370);
}

function encryptPress() {
  userInputVal = userInput.value();
  userInputVal = userInputVal.toUpperCase();

  solved = "";
  userInput.value("");

  cipherEncrypt(userInputVal);
  alert("Your string has been solved");
}
