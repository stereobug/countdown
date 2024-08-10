const randomNum = (min = 0, max = 999) => {
  return Math.floor(Math.random() * (max - min) + min);
};

document.getElementById("calc-button").addEventListener("click", () => {
  const num = randomNum();
  console.log(num); // This will now log the number when the button is clicked
  let strNum = num.toString();
  // pad with 0s if needed
  let padding = 3 - strNum.length;
  if (padding != 0) {
    if (padding == 1) {
      strNum = "0" + strNum;
    }
    if (padding == 2) {
      strNum = "00" + strNum;
    }
  }
  // update the html display
  document.getElementsByClassName("digit-one")[0].innerHTML = strNum[0];
  document.getElementsByClassName("digit-two")[0].innerHTML = strNum[1];
  document.getElementsByClassName("digit-three")[0].innerHTML = strNum[2];
});
