const randomNum = (min = 0, max = 999) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const target = () => {
  const num = randomNum();
  // console.log(num);
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
};

const genNum = (topVal, bottomVal) => {
  topArr = [25, 50, 75, 100];
  bottomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nums = [];
  for (i = 0; i < topVal; i++) {
    let idx = randomNum(0, topArr.length);
    let spliced = topArr.splice(idx, 1);
    nums.push(spliced[0]);
  }
  for (i = 0; i < bottomVal; i++) {
    let idx = randomNum(0, bottomArr.length);
    let spliced = bottomArr.splice(idx, 1);
    nums.push(spliced[0]);
  }
  target();
  return nums;
};

document.getElementById("top-one").addEventListener("click", () => {
  const nums = genNum(1, 5);
  console.log(nums);
});

document.getElementById("top-two").addEventListener("click", () => {
  const nums = genNum(2, 4);
  console.log(nums);
});

document.getElementById("top-three").addEventListener("click", () => {
  const nums = genNum(3, 3);
  console.log(nums);
});

document.getElementById("top-four").addEventListener("click", () => {
  const nums = genNum(4, 2);
  console.log(nums);
});

// document.getElementsByClassName().addEventListener();
