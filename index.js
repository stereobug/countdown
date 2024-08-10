const randomNum = (min = 0, max = 999) => {
  return Math.floor(Math.random() * (max - min) + min);
};

document.getElementById("calc-button").addEventListener("click", () => {
  const num = randomNum();
  console.log(num); // This will now log the number when the button is clicked
  let strNum = num.toString();
  let digitOneDiv = document.getElementsByClassName("digit-one")[0];
  let digitTwiDiv = document.getElementsByClassName("digit-two")[0];
  let digitThreeDiv = document.getElementsByClassName("digit-three")[0];
  for (let i = 0; i < strNum; i++) {
    if (i == 0) {
      digitOneDiv.innerHTML = strNum[i];
    }
    if (i == 1) {
      digitTwiDiv.innerHTML = strNum[i];
    }
    if (i == 2) {
      digitThreeDiv.innerHTML = strNum[i];
    }
  }
});
