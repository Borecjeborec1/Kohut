const { execSync } = require('child_process');
const fs = require("fs")
const letters = JSON.parse(fs.readFileSync(__dirname + "/letters.json", "utf-8"))

exports.generate = async function generate(arguments) {
  const word = arguments[0]
  const year = arguments[1]
  if (word.length != 7) {
    console.log("now it needs to be 7 letters long")
    return
  }
  console.log("Display " + word + " in year " + year)
  console.log("If you want to change or cancel, press CTRL+C. You have 10 seconds.")
  // setTimeout(() => { }, 10000)
  let month = 1
  let day = calculateStartDay(word.length, month, year)
  let date = `${year}-${month}-${day}`

  let splittedWord = word.split("")
  for (let i = 0; i < word.length; ++i) {
    for (let j = 0; j < 49; ++j) {
      if (letters[splittedWord[i]][j]) {
        for (let k = 0; k < 1; ++i) {
          fs.writeFileSync("fileName", JSON.stringify(Math.random()))
          exec(`git add .`);
          exec(`git commit -m "idk what am I doing" --date="${num + i}"`);
          exec(`git push`);
        }
        // one commit
      } else {
        // multiple commit 
        for (let k = 0; k < 4; ++i) {
          fs.writeFileSync("fileName", JSON.stringify(Math.random()))
          exec(`git add .`);
          exec(`git commit -m "idk what am I doing" --date="${num + i}"`);
          exec(`git push`);
        }
      }
    }
  }
  console.log(date)
}


function calculateStartDay(wordLength, month, year) {
  const letterWidth = 7
  const daysInWeek = 7

  let day = Math.floor((daysInWeek - wordLength) * letterWidth / 2 * 7 + daysInWeek)
  let dayInWeek = whatDay(day, month, year)
  let startingDay = day - dayInWeek
  return startingDay
}

function whatDay(day, month, year) {
  let date = new Date();
  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);
  return date.getDay()
}

function handleMonth(day, month) {
  switch (month) {
    case 1:
      month += Math.floor(day / 31)
      day = day % 31
  }
}