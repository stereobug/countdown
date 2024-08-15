const randomNum = (min = 0, max = 999) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const setTargetDigitsHtml = (target) => {
  const targetDigitOne = document.getElementsByClassName("digit-one")[0];
  const targetDigitTwo = document.getElementsByClassName("digit-two")[0];
  const targetDigitThree = document.getElementsByClassName("digit-three")[0];
  if (target) {
    targetDigitOne.innerHTML = target[0];
    targetDigitTwo.innerHTML = target[1];
    targetDigitThree.innerHTML = target[2];
  } else {
    targetDigitOne.innerHTML = "";
    targetDigitTwo.innerHTML = "";
    targetDigitThree.innerHTML = "";
  }
};

const setTarget = () => {
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
  setTargetDigitsHtml(strNum);
  // give nums back to solver
  return strNum;
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
  return nums;
};

const solve = (nums, target) => {
  solverRun(nums, target, null, (result) => {
    // if (result) {
    // console.log(typeof result);
    // console.log(result);
    // console.dir(result);
    console.log("Solution:", result.getSolution().toString());
    // }
  });
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const renderNums = async (nums) => {
  let numCards = document.getElementsByClassName("num-card");
  if (nums) {
    // run loop in reverse so numbers are populated from right -> left
    for (i = numCards.length - 1; i > -1; i--) {
      await delay(500);
      // numCards[i].innerHTML = nums.pop();
      // await delay(500);
      numCards[i].innerHTML = nums[i];
    }
    let target = setTarget();
    // need timer here
    //
    // solve
    solve(nums, target);
  } else {
    for (i = numCards.length - 1; i > -1; i--) {
      numCards[i].innerHTML = "";
    }
  }
};

const resetBoard = () => {
  // no value as arg resets target
  setTargetDigitsHtml();
  // no value as arg resets nums
  renderNums();
};

// one from the top
document.getElementById("top-one").addEventListener("click", () => {
  // reset if existing game
  resetBoard();
  const nums = genNum(1, 5);
  console.log(nums);
  renderNums(nums);
});

// two from the top
document.getElementById("top-two").addEventListener("click", () => {
  // reset if existing game
  resetBoard();
  const nums = genNum(2, 4);
  console.log(nums);
  renderNums(nums);
});

// three from the top
document.getElementById("top-three").addEventListener("click", () => {
  // reset if existing game
  resetBoard();
  const nums = genNum(3, 3);
  console.log(nums);
  renderNums(nums);
});

// four from the top
document.getElementById("top-four").addEventListener("click", () => {
  // reset if existing game
  resetBoard();
  const nums = genNum(4, 2);
  console.log(nums);
  renderNums(nums);
});
