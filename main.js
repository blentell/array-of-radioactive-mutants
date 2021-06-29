/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(names) {
  names.push("Colin");
}

function addMeToStart(names) {
  names.unshift("Colin");
}

function changeLast(elements, value) {
  elements[elements.length - 1] = value;
}

function changeAllValuesTo(elements, value) {
  for (let i = 0; i < elements.length; i++){
    elements[i] = value;
  }
}

function oddOrEven(elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] % 2 === 0) {
      elements[i] = "even";
    }
    else {
      elements[i] = "odd";
    }
  }
}

function changeNextThreeToValue(start, elements, value) {
  for (let i = start; i < start + 3; i++){
    elements[i] = value;
  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
