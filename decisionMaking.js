// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
"You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// This is an if statment. Line 12 says that if the variable doorChoice is strictly equal to 1 then the variable
// bearClothing will be hat. Line 14 uses an else statment so tell us that if the door choice is any number other than 1
// the bearClothing will be scarf.
// 2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//scarf
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// This is another if statment. If the bearChoice is strictly equal to 1 then it looks like they want to output to be
// "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!". There is no console.log written though,
// I am wondering if this is a mistake or not. If the console.log command were there it would have else if statments for bearChoice 2 and 3,
// and an else statment for any other number.
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The final outcome would be "You run as fast as you can into the next room. It's full of snakes!"
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//"You tell the bear that the hat is too small and it start to cry"
// 7. What is your favorite ending?
// Of course it is "You stay eith the bear and become it's best friend"
