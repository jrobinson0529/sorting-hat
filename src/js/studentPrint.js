import {printToDom} from "./index.js";

const studentPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `
                  <div class="card m-3 text-center ${element.house}" style="width: 18rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <hr class="card-line">
                      <p class="card-text">${element.house}</p>
                      <button class="btn btn-primary expel text-center" id="${i}">Expel</button>
                    </div>
                  </div>`;
  });
  printToDom('#card-container', domString);
};

export default studentPrint;
