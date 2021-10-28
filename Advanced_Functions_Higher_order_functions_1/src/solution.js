function printNames(names) {
  names.forEach((names) => {
  console.log(names);
});
}


function logTreeType(trees) {
  trees.forEach((trees) => {
  console.log(trees.type);
});
}

function totalPoints(points) {
  let total = 0;
  points.forEach((points) => {
    total += points;
  })
  return total;
}

function buildSentence(words) {
  let sentence = "";
  words.forEach((words) => {
    sentence += words + " ";
  })
  return sentence;
}

function logPercentages(decimals) {
  decimals.forEach((decimals) => {
    let percentage = decimals * 100;
    console.log(`${percentage}%`);
  })
}

/*
function printNames(names) {
  // your solution here
}

function logTreeType(trees) {
  // your solution here
}

function totalPoints(points) {
  // your solution here
}

function buildSentence(words) {
  // your solution here
}

function logPercentages(decimals) {
  // your solution here
}*/

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
