const printToDom = (divId, printedString) => {
  let selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printedString;
};

export default printToDom;
