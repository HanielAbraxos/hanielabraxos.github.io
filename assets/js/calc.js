var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("calc__button");
  
  Array.prototype.forEach.call(buttons, function(calc__button) {
  calc__button.addEventListener("click", function() {
    if (calc__button.tetxContent === "History"){
      addToHistory()
    }
    if (calc__button.textContent != "=" && calc__button.textContent != "AC" &&  calc__button.textContent != "x" && 
    calc__button.textContent != "÷" &&  calc__button.textContent != "√" &&  calc__button.textContent != "x²" && 
    calc__button.textContent != "%" &&  calc__button.textContent != "Del" &&  calc__button.textContent != "±" && 
    calc__button.textContent != "sin" && calc__button.textContent != "cos" && calc__button.textContent != "tan" && 
    calc__button.textContent != "log" && calc__button.textContent != "ln" && calc__button.textContent != "^" && 
    calc__button.textContent != "x!" && calc__button.textContent != "π" && calc__button.textContent != "e" && 
    calc__button.textContent != "rad" && calc__button.textContent != "∘") {
      display.value += calc__button.textContent;
    } else if (calc__button.textContent === "=") {
      equals();
    } else if (calc__button.textContent === "AC") {
      clear();
    } else if (calc__button.textContent === "x") {
      multiply();
    } else if (calc__button.textContent === "÷") {
      divide();
    } else if (calc__button.textContent === "±") {
      plusMinus();
    } else if (calc__button.textContent === "Del") {
      backspace();
    } else if (calc__button.textContent === "%") {
      percent();
    } else if (calc__button.textContent === "π") {
      pi();
    } else if (calc__button.textContent === "x²") {
      square();
    } else if (calc__button.textContent === "√") {
      squareRoot();
    } else if (calc__button.textContent === "sin") {
      sin();
    } else if (calc__button.textContent === "cos") {
      cos();
    } else if (calc__button.textContent === "tan") {
      tan();
    } else if (calc__button.textContent === "log") {
      log();
    } else if (calc__button.textContent === "ln") {
      ln();
    } else if (calc__button.textContent === "^") {
      exponent();
    } else if (calc__button.textContent === "x!") {
      factorial();
    } else if (calc__button.textContent === "e") {
      exp();
    } else if (calc__button.textContent === "rad") {
      radians();
    } else if (calc__button.textContent === "∘") {
      degrees();
    }
  });
});


function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}

let history = [];

function equals() {
  let val = display.value;
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    // checkLength()
    syntaxError()
  }
  history.unshift( val + "=" + display.value + " ");
  

  let first_hist = document.getElementById("firsth-output");
  let sec_hist = document.getElementById("sech-output");
  let third_hist = document.getElementById("thirdh-output");
  let forth_hist = document.getElementById("forthh-output");
  let fifth_hist = document.getElementById("fifthh-output");
  first_hist.innerHTML = "<strong> Output : </strong>" + history[0];
  sec_hist.innerHTML = "<strong> Output : </strong>" + history[1];
  third_hist.innerHTML = "<strong> Output : </strong>" + history[2];
  forth_hist.innerHTML = "<strong> Output : </strong>" + history[3];
  fifth_hist.innerHTML = "<strong> Output : </strong>" + history[4];

  console.log(fifth_hist)
  const histsubmit = document.getElementById("historyid");
  console.log(history[0])
  
}



// function dis(val) {
//   display.value += val

//     addToHistory(val);
// }

// function solve() {
//   let x = display.value;
//   let y = eval(x)
//   display.value = y

//     addToHistory('=' + y);
// }

// function clr() {
//     display.value = " "

//     addToHistory(' ');
// }

// function addToHistory(value) {
//     history += value;
//     console.log(history);
//     document.getElementById('history').innerText = history;
// }


function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "Undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}