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
                        <div class="form-group w-100 d-flex flex-column">
                            <label for="name">Student:</label>
                            <input type="text" class="form-control text-center" id="name" placeholder="Enter name here..." required>
                            <button type="submit" class="btn btn-primary m-3" id="submit-form">Submit</button>
                          </div> 
              
               `;            
  }
  printToDom('#form-container', domString);
  isFormOpen = true;
  return isFormOpen; 
};

const getStudentInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const house = ranHouse();

  const obj = {
    name,
    house,
  };
  students.push(obj);
  studentPrint(students);
  // Need student printer for this function to continue.
};
const voldArmyPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card m-3 text-center" style="width: 18rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title">${element[0].name}</h5>
                      <p class="card-text">${element[0].house}</p>
                      <p class="card-text">Minion of Voldemort</p>
                    </div>
                  </div>`;
      console.log(element) ;           
  });
  printToDom('#voldemort-army', domString);
};
const studentPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card m-3 text-center" style="width: 18rem;" id="${i}">
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
    console.log(voldArmy);
    // voldArmyPrint(voldArmy);
    // console.log(voldArmy);
  }
};







// Handles click events
const handleButtonEvents = () => {
  startSorting.addEventListener('click', formOpen);
  document.querySelector('#form-container').addEventListener('submit', getStudentInfo);
  document.querySelector('#card-container').addEventListener('click', deleteStudent);
};
// Initialize JS
const init = () => {
  studentPrint(students);
  handleButtonEvents();
};
init();
