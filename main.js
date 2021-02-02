const voldArmy = [];
const students = [
  {
    name: 'Neville',
    house: 'Slytherin',
  },
  {
    name: 'Harry',
    house: 'Gryffindor',
  },
  {
    name: 'Ron',
    house: 'Hufflepuff',
  },
];
let isFormOpen = false;
const printToDom = (divId, printedString) => {
  let selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printedString;
};
// Function to choose a random house
const ranAdjective = () => {
  const ranNum = (Math.floor(Math.random()*10)+1);
  let adjective = '';
  switch(ranNum) {
    case 1:
      adjective = 'Vile';
      break;
    case 2:
      adjective = 'Defiled';
      break;
    case 3:
      adjective = 'Chosen';
      break;
    case 4:
      adjective = 'Cruel';
      break;
    case 5:
      adjective = 'Grotesque';
      break;
    case 6:
      adjective = 'Abashed';
      break;
    case 7:
      adjective = 'Mighty';
      break;
    case 8:
      adjective = 'Sniveling';
      break;
    case 9:
      adjective = 'Unholy';
      break;
    case 10:
      adjective = 'Disconcerted';
      break;
    }
    return adjective;   
};
const ranHouse = () => {
  const ranNum = (Math.floor(Math.random() * 4) + 1);
  let house = '';

  switch(ranNum) {
    case 1:
      house = 'Slytherin';
      break;
    case 2:
      house = 'Gryffindor';
      break;
    case 3:
      house = 'Hufflepuff';
      break;
    case 4:
      house = 'Ravenclaw';
      break;
  }
  return house;
};
// query selectors
const body = document.querySelector('body');
const formContainer = document.querySelector('#form-container');
const cardContainer = document.querySelector('#card-container');
const startSorting = document.querySelector('#sortingBtn');

// Function to open the student form
const formOpen = (e) => {
  e.preventDefault();
  let domString = '';
  if (e.target.id === "sortingBtn") {
     domString = `
                        <div class="form-group w-100 d-flex flex-column flex-wrap align-items-start">
                            <label for="name" class="my-3">Student:</label>
                            <input type="text" class="form-control text-center" id="name" placeholder="Enter name here..." required>
                            <button type="submit" class="btn btn-primary my-3" id="submit-form">Submit</button>
                            <img class="img-fluid align-self-end"src="./img/106-1067907_sorting-hat-png-harry-potter-sorting-hat-png.png" alt="a hat"
                          </div> 
              
               `;            
  }
  printToDom('#form-container', domString);
  isFormOpen = true;
  return isFormOpen; 
};
// Function that handles student submission
const getStudentInfo = (e) => {
  // Prevent form from reloading page
  e.preventDefault();
  const form = document.querySelector('form');
  const name = document.querySelector('#name').value;
  const house = ranHouse();

  const obj = {
    name,
    house,
  };
  students.push(obj);
  studentPrint(students);
  // Resets form after submission
  form.reset();
};
// Function that prints students who were expelled to vold army
const voldArmyPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card m-3 text-center minion" style="width: 10rem; height: 12rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title">${element[0].name} the ${ranAdjective()}</h5>
                      <p class="card-text"></p>
                      <p class="card-text">Minion of Voldemort</p>
                    </div>
                  </div>`;          
  });
  printToDom('#voldemort-army', domString);
};
const studentPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card m-3 text-center ${element.house}" style="width: 18rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">${element.house}</p>
                      <button class="btn btn-primary" id="${i}">Expel</button>
                    </div>
                  </div>`;
  });
  printToDom('#card-container', domString);
};
const deleteStudent = (e) => {
  const targetType = e.target.type;
  let targetId = e.target.id;
  if (targetType === 'submit') { 
    // if (targetId + 1 === removedStudents.length) {
    //   voldArmy.push(students.slice(targetId));
    // }
    // let voldArmy = students.slice(targetId, newTargetId);
    
    voldArmy.push(students.splice(targetId, 1));
    // voldArmy.concat(voldArmy);
    voldArmyPrint(voldArmy);
    studentPrint(students);
    // voldArmyPrint(voldArmy);
    // console.log(voldArmy);
  }
};
// Function to sort based on house or alphabetically
const filterClick = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'house') {
      // Sort method is hard to explain. Each letter in the alphabet has a UTF-16 code and this is checking if the UTF16 of A, the first object.property being checked, is greater than UTF16 of B. If it returns 1 then it takes priority.
      const filteredByHouse = students.sort((a, b) => (a.house > b.house) ? 1 : (a.house === b.house) ? 1 : -1);   
      studentPrint(filteredByHouse);
      // Names need to be converted to lowercase because capital letters have different UTF16 values.
      } else if (buttonId === 'alphabet') {
      const filteredByAlphabet = students.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);   
      studentPrint(filteredByAlphabet);
  }
  
  
};






// Handles click events
const handleButtonEvents = () => {
  startSorting.addEventListener('click', formOpen);
  document.querySelector('#form-container').addEventListener('submit', getStudentInfo);
  document.querySelector('#card-container').addEventListener('click', deleteStudent);
  document.querySelector('#house').addEventListener('click', filterClick);
  document.querySelector('#alphabet').addEventListener('click', filterClick);
};
// Initialize JS
const init = () => {
  studentPrint(students);
  handleButtonEvents();
};
init();
