import {printToDom, ranAdjective} from "./index.js";

const voldArmyPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card m-3 text-center minion" style="width: 17rem; height: 19rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title fs-4 h-50">${element[0].name} the ${ranAdjective()}</h5>
                      <p class="card-footer h-50">Minion of Voldemort</p>
                    </div>
                  </div>`;          
  });
  printToDom('#voldemort-army', domString);
};

export default voldArmyPrint;
