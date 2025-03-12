console.log("this is a message for the console");

// Defining Variables
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;
// link buttons to constants
const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const californiaButton = document.getElementById("california");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");

// function to log info about our viz
function logWorkbookInformation() {
  // set the workbook variable to our workbook
  workbook = viz.workbook;
  // get name of workbook
  console.log(`The workbook name is "${workbook.name}"`);

  // get array of published sheets within workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is called "${element.name}"`);
  });

  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is "${vizActiveSheet.name}"`);

  // List all of the worksheets within our active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(
      `In ${vizActiveSheet.name}, the sheet with index ${index} is called "${element.name}"`
    );
  });
}

// make a function for the oregon button
function oregonWashFunc() {
  // print the button value
  console.log(oregonWashingtonButton.value);
  // filter the states in all the sheets in the active sheet
  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

// make a function for the california button
function californiaFunc() {
  // print the button value
  console.log(californiaButton.value);
  // filter the states in all the sheets in the active sheet
  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["California"], "replace");
  });
}

// make a function for the clear button
function clearFilterFunc() {
  // print the button value
  console.log(clearFilterButton.value);
  // filter the states in all the sheets in the active sheet
  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

// make a function for the undo button
function undoFunc() {
  // print the button value
  console.log(undoButton.value);
  // filter the states in all the sheets in the active sheet
  viz.undoAsync();
}

// adding eventlisteners
oregonWashingtonButton.addEventListener("click", oregonWashFunc);
californiaButton.addEventListener("click", californiaFunc);
clearFilterButton.addEventListener("click", clearFilterFunc);
undoButton.addEventListener("click", undoFunc);
viz.addEventListener("firstinteractive", logWorkbookInformation);
