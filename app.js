//the :: " use stirct; ":: is use to prevent un delared varible in the program environment
"use strict";

// GB meaning is Global Variable
let myGB = {
  table: document.getElementById("table2"),
  rIndex: document.getElementById("table2"),
  table1: document.getElementById("table1"),
  rIndex1: document.getElementById("table1"),
  arraySum: [],
  // this is my method to sum the all items in arraySum
  totalValue: function () {
    let sum = 0;
    for (let a = 0; a < this.arraySum.length; a++) {
      sum += this.arraySum[a];
      console.log("sum loop value: " + sum);
    }

    console.log("sum: " + sum);
    document.getElementById("total").innerHTML = "Total: &#8369; " + sum;
    document.getElementById("total").setAttribute("class", "totalValue");
    return sum;
  },
};

myGB.totalValue();
function calculate(myCoffeePrice, addValue) {
  let add = addValue + myCoffeePrice;
  console.log(add);
  return add;
}

function quantityPrice(price, quantity, data6) {
  let multiply = 0;
  let calculate = price * quantity;
  multiply += calculate;
  let total = parseInt(
    (document.getElementById("pass-textfield6").value = multiply)
  );
  data6.innerHTML = total;
  return total;
}

// this function validate the furchase order if have no values
function checkEmptyInput() {
  let isEmpty = false,
    numberOrder = document.getElementById("pass-textfield1").value,
    coffeeType = document.getElementById("pass-textfield2").value,
    coffeeName = document.getElementById("pass-textfield3").value,
    coffeePrice = document.getElementById("pass-textfield4").value,
    coffeeQuantity = document.getElementById("pass-textfield5").value;

  if (numberOrder === "") {
    alert("**No Number Order is empty or the other all field is empty");
    isEmpty = true;
  } else if (coffeeType === "") {
    alert(" **No Coffee Type or the other all field is empty ");
    isEmpty = true;
  } else if (coffeeName === "") {
    alert("**No Coffee Name or the other all field is empty");
    isEmpty = true;
  } else if (coffeePrice === "") {
    alert("**No Coffee Price or the other all field is empty");
    isEmpty = true;
  } else if (coffeeQuantity === "") {
    alert("**No Coffee Quantity or the other all field is empty");
    isEmpty = true;
  }

  return isEmpty;
}

function addHtmlTableRow() {
  if (!checkEmptyInput()) {
    let row = myGB.table1.insertRow(-1),
      data1 = row.insertCell(0),
      data2 = row.insertCell(1),
      data3 = row.insertCell(2),
      data4 = row.insertCell(3),
      data5 = row.insertCell(4),
      data6 = row.insertCell(5),
      data7 = row.insertCell(6),
      numberOrder = document.getElementById("pass-textfield1").value,
      coffeeType = document.getElementById("pass-textfield2").value,
      coffeeName = document.getElementById("pass-textfield3").value,
      coffeePrice = document.getElementById("pass-textfield4").value,
      coffeeQuantity = document.getElementById("pass-textfield5").value;
    //coffeePriceTotal = document.getElementById("pass-textfield6").value;
    data1.innerHTML = numberOrder;
    data2.innerHTML = coffeeType;
    data3.innerHTML = coffeeName;
    data4.innerHTML = coffeePrice;
    data5.innerHTML = coffeeQuantity;

    data7.innerHTML =
      "<button id='btn' onclick='deleteRow(this)';>Cancel</button>";
    let addCoffeePrice = parseInt(
      document.getElementById("pass-textfield4").value
    );
    let addQuantity = parseInt(
      document.getElementById("pass-textfield5").value
    );

    // call the function to set the event to the new row

    let passSum = quantityPrice(addCoffeePrice, addQuantity, data6);
    addValue(passSum);
    selectedRowToInput();
    selectItem();
  }
}

// add item in mySum array
function addValue(add) {
  myGB.arraySum.push(add);
  console.log(myGB.arraySum);
  myGB.totalValue();
  selectItem();
}

// select row coffee Menus
function selectedRowToInput() {
  for (var i = 1; i < myGB.table.rows.length; i++) {
    myGB.table.rows[i].onclick = function () {
      // get the seected row index
      myGB.rIndex = this.rowIndex;
      document.getElementById("pass-textfield1").value =
        this.cells[0].innerHTML;
      document.getElementById("pass-textfield2").value =
        this.cells[1].innerHTML;
      document.getElementById("pass-textfield3").value =
        this.cells[2].innerHTML;
      document.getElementById("pass-textfield4").value =
        this.cells[3].innerHTML;
      document.getElementById("pass-textfield5").value =
        this.cells[4].innerHTML;
    };
  }
}

// This call function purpose to show the value of the coffe mune selected in purchase coffee order
selectedRowToInput();

// delete rows in coffee order list
function deleteRow(el) {
  var tbl = el.parentNode.parentNode.parentNode;
  var row = el.parentNode.parentNode.rowIndex;
  tbl.deleteRow(row);

  let addInteger1 = parseInt(document.getElementById("pass-textfield6").value);
  const index = myGB.arraySum.indexOf(addInteger1);
  if (index > -1) {
    myGB.arraySum.splice(index, 1);
  }
  myGB.totalValue();
  console.log(myGB.arraySum);
}

// select the rows in coffee order list
function selectItem() {
  for (var i = 1; i < myGB.table1.rows.length; i++) {
    // event to get value of item and the index of an arraySum
    myGB.table1.rows[i].onmouseover = function () {
      // get the seected row index
      myGB.rIndex = this.rowIndex;
      document.getElementById("pass-textfield6").value =
        this.cells[5].innerHTML;
    };
  }
}

// clear all rows and delete all arraySum
function clearAll() {
  for (let i = 1; i < myGB.table1.rows.length; ) {
    myGB.table1.deleteRow(i);
    myGB.arraySum.pop();
  }
  myGB.totalValue();
  console.log(myGB.arraySum);
}

//I need to chnge this code for my Inprovement
//This function does to input Integervalue only
function validateInput(evt) {
  let theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }

  let regex = /[0-9]|\./;

  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function checkOrder() {
  let isEmpty = false,
    numberOrder = document.getElementById("pass-textfield1").value,
    coffeeType = document.getElementById("pass-textfield2").value,
    coffeeName = document.getElementById("pass-textfield3").value,
    coffeePrice = document.getElementById("pass-textfield4").value;

  if (numberOrder === "") {
    alert("Please order first before insert cash");
    window.location.reload();
  } else if (coffeeType === "") {
    alert("Please order first before insert cash");
    window.location.reload();
  } else if (coffeeName === "") {
    alert("Please order first before insert cash");
    window.location.reload();
  } else if (coffeePrice === "") {
    alert("Please order first before insert cash");
    window.location.reload();
  }

  return isEmpty;
}

function purchase() {
  let sum = myGB.totalValue();
  let customerMoney = parseInt(document.getElementById("AmountPay").value);
  let change = customerMoney - sum;

  if (isNaN(customerMoney)) {
    alert("Please insert cash ");
  } else {
    if (change < 0) {
      alert("You don`t have enought cash");
    } else {
      document.getElementById("output").innerHTML = change;
      document.getElementById("AmountPay").value = "";
      clearAll();
    }
    if (!checkOrder());
  }
}

//console.log(myGB.table1.rows.length);
