var crystalCollectorGame = {

gameNumber: numberGenerated,
wins: 0,
losses: 0,
currentScore: 0,
crystalA: crystalNumberA,
crystalB: crystalNumberB,
crystalC: crystalNumberC,
crystalD: crystalNumberD,










}

function numberGenerated() {
  var randomNumb = Math.floor(Math.random() * 102) + 19;
  console.log(randomNumb)
}

numberGenerated();

function crystalNumberA() {
  var randomNumb = Math.floor(Math.random() * 12) + 1;
  console.log(randomNumb)
}

crystalNumberA();

function crystalNumberB() {
  var randomNumb = Math.floor(Math.random() * 12) + 1;
  console.log(randomNumb)
}

crystalNumberB();

function crystalNumberC() {
  var randomNumb = Math.floor(Math.random() * 12) + 1;
  console.log(randomNumb)
}

crystalNumberC();

function crystalNumberD() {
  var randomNumb = Math.floor(Math.random() * 12) + 1;
  console.log(randomNumb)
}

crystalNumberD();


//Need to nest function currentScore inside another functin that starts the game and fills out all the crystls.
    function scoreCheck() {
      if (currentScore === gameNumber) {
        wins++;
        alert("You Win Crystal Champion!");
      } 
      else if (currentScore > gameNumber) {
        losses++;
        alert("you fail at life!");
      }
    }

//Figure out a way to start the game using jquery
//.append or .html
//.append is going to append to the html
//.html replaces the html with the content that you are putting
// for example: using these rules to add 0's to the scores to reset the game
//try creating a reset button


//onclick events for creating buttons for the cyrstals