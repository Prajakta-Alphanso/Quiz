var readlineSync =  require('readline-sync');
var score  = 0;
var q1 = readlineSync.question("Hey, Whats your name? ")
console.log("Welcome " + q1+ "!");
console.log("Lets check how well you know Prajakta...");

var array = [{question : "Whats my DOB?", answer : "19 Dec"}, {question : "Whats my favourite color?", answer : "Black"},{question : "Where do I work?", answer : "QK"}];

for(i=0; i<array.length;i++){
  //console.log(array[i].question);
  var result = play(array[i].question,array[i].answer);
  if(array[i].answer === result){
    console.log("Yay, that's correct!!");
    score = score + 1;
  } else {
    console.log("Nah, that's incorrect");
  }
  console.log("You scored = "+ score + " point");
  console.log("------------------------------------");
}
function play(quest, ans){
  console.log(quest);
  var ans = readlineSync.question("Your answer: ");
  //console.log(ans);
  return ans;
}

var highScore = [{name: "Prajakta", score: "3"},{name: "Asher", score: "2"}];
console.log("Highest score's")
for(var j=0; j<highScore.length;j++){
  console.log(highScore[j].name);
  console.log(highScore[j].score);
  console.log("------------------------------------");
}

