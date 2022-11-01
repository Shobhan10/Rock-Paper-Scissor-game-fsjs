const imagesDivArray = document.querySelectorAll(".choice");
const imagesArray = document.querySelectorAll(".choice img");
const resultUserStat = document.getElementById("result-user-stat");
const resultCompStat = document.getElementById("result-comp-stat");
const resultFinalStat = document.getElementById("result-final-stat");
const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");

let userCount = 0;
let compCount = 0;
let clickCount = 0;

const userImg = document.createElement("img");
const compImg = document.createElement("img");
const span = document.createElement("span");

for (let choice = 0; choice < imagesDivArray.length; choice++) {
  imagesDivArray[choice].addEventListener("click", () => {
    showUserImage(choice);
    showCompImage();
    play();
    winner();
  });
}

// Accessing the clicked div's image through firstElementChild and then accessing src of that image and storing it in created img tag which will be appended in user to showcase what the user has clicked
function showUserImage(choice) {
  userImg.src = imagesDivArray[choice].firstElementChild.src;
  resultUserStat.append(" ");
  resultUserStat.append(userImg);
}

// Generating random images and displaying them showcasing as if those are system generated
function showCompImage() {
  let num = Math.floor(Math.random() * imagesArray.length);
  compImg.src = imagesArray[num].src;
  resultCompStat.append(" ");
  resultCompStat.append(compImg);
}

function play() {
  if (userImg.src.includes("rock") && compImg.src.includes("paper")) {
    compCount++;
    compScoreVal.textContent = compCount;
  } else if (userImg.src.includes("rock") && compImg.src.includes("scissors")) {
    userCount++;
    userScoreVal.textContent = userCount;
  } else if (userImg.src.includes("paper") && compImg.src.includes("scissors")) {
    compCount++;
    compScoreVal.textContent = compCount;
  } else if (userImg.src.includes("paper") && compImg.src.includes("rock")) {
    userCount++;
    userScoreVal.textContent = userCount;
  } else if (userImg.src.includes("scissors") && compImg.src.includes("rock")) {
    compCount++;
    compScoreVal.textContent = compCount;
  } else if (userImg.src.includes("scissors") && compImg.src.includes("paper")) {
    userCount++;
    userScoreVal.textContent = userCount;
  }
}

function winner() {
  if (clickCount === 0) {
    span.textContent = "";
    resultFinalStat.append(span);
    userScoreVal.textContent = userCount;
    compScoreVal.textContent = compCount;
  }

  clickCount++;

  if (clickCount === 10) {
    if (userCount === compCount) {
      span.textContent = " Tie";
      resultFinalStat.append(span);
    } else if (userCount > compCount) {
      span.textContent = " User";
      resultFinalStat.append(span);
    } else if (compCount > userCount) {
      span.textContent = " Computer";
      resultFinalStat.append(span);
    }

    userCount = 0;
    compCount = 0;
    clickCount = 0;
  }
}



