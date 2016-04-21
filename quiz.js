/*
tree height is defined by a certian number of lines
tree character is any character
tree structure is one character plus two additional characters centered on each line


for the first line go the the height in spaces to get to the center
(we can do hieght minus one to leave room for the character),
then place one character

 - so step one -  if height is 5 console.log(treeHeight spaces + "treeCharacter") -

for each additional line go the same number of spaces minus two,
then print the number of charcters printed on the last line plus two more

 - so step two - console.log(treeHeight - two + "treeCharacter + 2")

keep pirnting in this pattern for the required number of lines

- repeat step two until it reaches the line height needed -
*/
function tree() {

var height = document.getElementById("treeHeight - 1");
var character = document.getElementById("treeCharacter");

var heightSubmit = document.getElementById("treeHeight").value;
var charSubmit = document.getElementById("treeCharacter").value;

console.log(heightSubmit, charSubmit);  // body...
}