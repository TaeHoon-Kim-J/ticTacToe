let cnt = 0;
let blockList = [];
let comList = [];
let userList = [];

function firstAttack() {
  const fa = Math.floor(Math.random() * 2);
  makeBlockList();
  if (fa == 0) {
    alert("당신의 선공입니다.");
  } else {
    alert("컴퓨터의 선공입니다.");
    document.getElementById('block4').innerText = "X";
    cnt += 1;
    removeList(4, 'c');
  }
}

function checkSelect(num) {
  if (cnt != 10) {
    const cap = document.getElementById('caption');
    if(blockList.indexOf(num) == -1) {
      alert("놓았던 자리엔 또 놓을 수 없습니다!")
    } else {
      document.getElementById('block'+num).innerText = "O";
      cnt += 1;
      removeList(num, 'u');
      if (cnt>=5) {
        if (winnerCheck('O') == 'win') {
          cnt = 10;
          cap.innerText = "당신의 승리입니다. 새로 시작하려면 새로고침을 눌러주세요."
        } else if (winnerCheck('O') == 'draw') {
          cap.innerText = "무승부입니다. 새로 시작하려면 새로고침을 눌러주세요."
        } else {
          comTurn(cap);
        }
      } else {
        comTurn(cap);
      }
    }
  }
}

function comTurn(cap) {
  if (cnt<2) {
    if(blockList.indexOf(4) != -1) {
      num = 4;
      cap.innerText = "당신의 차례입니다.";
    } else {
      num = blockList[0];
      cap.innerText = "당신의 차례입니다.";
    }
  } else {
    if (comCheck() != -1) {
      num = comCheck();
      cap.innerText = "당신의 차례입니다.";
    } else if (userCheck() != -1) {
      num = userCheck();
      cap.innerText = "당신의 차례입니다.";
    } else {
      num = blockList[0];
      cap.innerText = "당신의 차례입니다.";
    }
  }

  document.getElementById('block'+num).innerText = "X";
  cnt++;
  removeList(num, 'c');
  if (cnt >= 5) {
    if (winnerCheck('X') == 'win') {
      cnt = 10;
      cap.innerText = "컴퓨터의 승리입니다. 새로 시작하려면 새로고침을 눌러주세요."
    } else if (winnerCheck('X') == 'draw') {
      cap.innerText = "무승부입니다. 새로 시작하려면 새로고침을 눌러주세요."
    } else {
      cap.innerText = "당신의 차례입니다.";
    }
  }
}

function makeBlockList() {
  for (i=0; i<9; i++) {
    randomNum = Math.floor(Math.random() * 9);
    if (blockList.indexOf(randomNum) == -1) {
      blockList.push(randomNum);
    } else {
      i--;
    }
  }
}

function removeList(num, player) {
  for(let i = 0; i < blockList.length; i++) {
    if(blockList[i] == num)  {
      if (player == 'c') {
        comList.push(blockList[i]);
      } else {
        userList.push(blockList[i]);
      }
      blockList.splice(i, 1);
      i--;
    }
  }
}

function comCheck() {
  if ((calculator(0, 1, 2, 'c') >= 1) || (calculator(5, 8, 2, 'c') >= 1) || (calculator(4, 6, 2, 'c') >= 1)) {
    num = 2;
  } else if ((calculator(0, 2, 1, 'c') >= 1) || (calculator(4, 7, 1, 'c') >= 1)) {
    num = 1;
  } else if ((calculator(1, 2, 0, 'c') >= 1) || (calculator(3, 6, 0, 'c') >= 1) || (calculator(4, 8, 0, 'c') >= 1)) {
    num = 0;
  } else if ((calculator(0, 3, 6, 'c') >= 1) || (calculator(2, 4, 6, 'c') >= 1) || (calculator(7, 8, 6, 'c') >= 1)) {
    num = 6;
  } else if ((calculator(0, 6, 3, 'c') >= 1) || (calculator(4, 5, 3, 'c') >= 1)) {
    num = 3;
  } else if ((calculator(0, 4, 8, 'c') >= 1) || (calculator(2, 5, 8, 'c') >= 1) || (calculator(6, 7, 8, 'c') >= 1)) {
    num = 8;
  } else if ((calculator(0, 8, 4, 'c') >= 1) || (calculator(1, 7, 4, 'c') >= 1) || (calculator(2, 6, 4, 'c') >= 1) || (calculator(3, 5, 4, 'c') >= 1)) {
    num = 4;
  } else if ((calculator(1, 4, 7, 'c') >= 1) || (calculator(6, 8, 7, 'c') >= 1)) {
    num = 7;
  } else if ((calculator(2, 8, 5, 'c') >= 1) || (calculator(3, 4, 5, 'c') >= 1)){
    num = 5;
  } else {
    num = -1;
  }
  return num;
}

function userCheck() {
  if ((calculator(0, 1, 2, 'u') >= 1) || (calculator(5, 8, 2, 'u') >= 1) || (calculator(4, 6, 2, 'u') >= 1)) {
    num = 2;
  } else if ((calculator(0, 2, 1, 'u') >= 1) || (calculator(4, 7, 1, 'u') >= 1)) {
    num = 1;
  } else if ((calculator(1, 2, 0, 'u') >= 1) || (calculator(3, 6, 0, 'u') >= 1) || (calculator(4, 8, 0, 'u') >= 1)) {
    num = 0;
  } else if ((calculator(0, 3, 6, 'u') >= 1) || (calculator(2, 4, 6, 'u') >= 1) || (calculator(7, 8, 6, 'u') >= 1)) {
    num = 6;
  } else if ((calculator(0, 6, 3, 'u') >= 1) || (calculator(4, 5, 3, 'u') >= 1)) {
    num = 3;
  } else if ((calculator(0, 4, 8, 'u') >= 1) || (calculator(2, 5, 8, 'u') >= 1) || (calculator(6, 7, 8, 'u') >= 1)) {
    num = 8;
  } else if ((calculator(0, 8, 4, 'u') >= 1) || (calculator(1, 7, 4, 'u') >= 1) || (calculator(2, 6, 4, 'u') >= 1) || (calculator(3, 5, 4, 'u') >= 1)) {
    num = 4;
  } else if ((calculator(1, 4, 7, 'u') >= 1) || (calculator(6, 8, 7, 'u') >= 1)) {
    num = 7;
  } else if ((calculator(2, 8, 5, 'u') >= 1) || (calculator(3, 4, 5, 'u') >= 1)){
    num = 5;
  } else {
    num = -1;
  }
  return num;
}

function calculator(num1, num2, num3, player) {
  if (player == 'c') {
    num = ((comList.indexOf(num1) +1) * (comList.indexOf(num2) +1) * (blockList.indexOf(num3) +1));
  } else {
    num = ((userList.indexOf(num1) +1) * (userList.indexOf(num2) +1) * (blockList.indexOf(num3) +1));
  }

  return num;
}

function winnerCheck(token) {
  playBoard = [];
  for (i = 0; i < 9; i++) {
    playBoard.push(document.getElementById('block'+[i]).innerText);
  }
  if ((playBoard[0] == token) && (playBoard[1] == token) && (playBoard[2] == token)) {
    return 'win';
  } else if ((playBoard[0] == token) && (playBoard[3] == token) && (playBoard[6] == token)) {
    return 'win';
  } else if ((playBoard[0] == token) && (playBoard[4] == token) && (playBoard[8] == token)) {
    return 'win';
  } else if ((playBoard[1] == token) && (playBoard[4] == token) && (playBoard[7] == token)) {
    return 'win';
  } else if ((playBoard[2] == token) && (playBoard[5] == token) && (playBoard[8] == token)) {
    return 'win';
  } else if ((playBoard[2] == token) && (playBoard[4] == token) && (playBoard[6] == token)) {
    return 'win';
  } else if ((playBoard[3] == token) && (playBoard[4] == token) && (playBoard[5] == token)) {
    return 'win';
  } else if ((playBoard[6] == token) && (playBoard[7] == token) && (playBoard[8] == token)) {
    return 'win';
  } else if (cnt == 9) {
    return 'draw';
  }
}
