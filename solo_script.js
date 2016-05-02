// ! ! !
// Three Bugs

var arrayAtticus = ['Atticus', '2405', '47000', 3];
var arrayJem = ['Jem', '62347', '63500', 4];
var arrayBoo = ['Boo', '11435', '54000', 3];
var arrayScout = ['Scout', '6243', '74750', 5];

//changed the name of array to empArray because the code had two instances of arrays
//each called 'array'
var empArray = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var stiArray = [];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for (var i = 0; i < empArray.length; i++) {
  stiArray[i] = calculateSTI(empArray[i]);
  newEl = document.createElement('li');
  newText = document.createTextNode(stiArray[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}

function calculateSTI(array) {
  var newArray = [];

  newArray[0] = array[0];

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) -
	getIncomeAdjustment(baseSalary);
  if (bonus > 0.13) {
    bonus = 0.13;
  }

  newArray[1] = bonus;

  //added toFixed(2) to reduce number of decimal points to 2
  newArray[2] = (baseSalary * (1.0 + bonus)).toFixed(2);
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + ' ' + newArray[1] + ' ' + newArray[2] + ' ' + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore) {
  var basePercent;
  switch (reviewScore) {
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }

  //switch function would always return a negative because it used to be
  //basePercent - 1;
  return basePercent;
}

function getYearAdjustment(employeeNumber) {
  var yearAdjustment = 0;
  if (employeeNumber.length == 4) {
    yearAdjustment = 0.05;
  }

  return yearAdjustment;
}

function getIncomeAdjustment(salary) {
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if (salary > 65000) {
    incomeAdjustment = 0.01;
  }

  return incomeAdjustment;
}
