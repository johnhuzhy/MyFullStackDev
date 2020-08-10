// 取値
var inputText = document.getElementById("inputText");
var btns = document.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log(this.id);
    switch (this.id) {
      case "clean":
        inputText.value = "";
        break;
      case "minus":
        minusHaddle();
        break;
      case "equals":
        equalsHaddle();
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        equalsHaddle();
      default:
        inputText.value += this.id;
    }
  };
}

// マイナス処理
function minusHaddle() {
  var text = inputText.value;
  if (text.startsWith("-")) {
    inputText.value = text.substr(1);
  } else {
    inputText.value = "-" + text;
  }
}

// 計算処理
function equalsHaddle() {
  var text = inputText.value;
  console.info(text);
  if (text.indexOf("Infinity") > -1) {
    console.error("Infinity");
    inputText.value = 0;
  } else if (text.indexOf("+") > -1) {
    plusHandle(text);
  } else if (text.lastIndexOf("-") > 0) {
    subtractHandle(text);
  } else if (text.indexOf("×") > -1) {
    multiplyHandle(text);
  } else if (text.indexOf("÷") > -1) {
    divideHandle(text);
  }
}

function plusHandle(text) {
  var tmp = text.split("+");
  console.info(tmp);
  inputText.value = +tmp[0] + +tmp[1];
}

function subtractHandle(text) {
  var tmp = text.split("-");
  console.info(tmp);
  if (tmp.length > 2) {
    inputText.value = 0 - tmp[1] - tmp[2];
  } else {
    inputText.value = tmp[0] - tmp[1];
  }
}

function multiplyHandle(text) {
  var tmp = text.split("×");
  console.info(tmp);
  inputText.value = tmp[0] * tmp[1];
}

function divideHandle(text) {
  var tmp = text.split("÷");
  console.info(tmp);
  inputText.value = tmp[0] / tmp[1];
}
