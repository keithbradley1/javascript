/*
tree height is defined by a certain number of lines
tree character is any character
tree structure is one character plus two additional characters centered on each line


for the first line go the the height in spaces to get to the center
(we can do hieght minus one to leave room for the character),
then place one character

 - so step one -  if height is 5 console.log(treeHeight spaces + "treeCharacter") -

for each additional line go the same number of spaces minus two,
then print the number of charcters printed on the last line plus two more

 - so step two - console.log(treeHeight - one + "treeCharacter + 1")

keep printing in this pattern for the required number of lines

- repeat step two until it reaches the line height needed -
*/

function tree() {
  var treeValue = {
    height: document.getElementById("treeHeight").value,
    character: document.getElementById("treeCharacter").value,
}


for ( var i = 0 ; i < treeValue.height; i++ ) {
  var makeTree = " ".repeat(treeValue.height - i );
  makeTree += treeValue.character.repeat((2*i) + 1 );
  console.log(makeTree);
}
}



