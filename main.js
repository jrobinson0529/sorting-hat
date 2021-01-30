
const students = [
  {
    name: 'Neville',
    id: 23,
    house: 'Slytherin',
  },
  {
    name: 'Harry',
    id: 19,
    house: 'Gryffindor',
  },
  {
    name: 'Ron',
    id: 35,
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
  const id = 10;

  const obj = {
    name,
    house,
    id,
  };
  console.log(obj);
  students.push(obj);
  studentPrint(students);
  console.log(students);
  // Need student printer for this function to continue.
};

const studentPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card m-3 text-center" style="width: 18rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <p class="card-text">${element.house}</p>
                      <a href="#" class="btn btn-primary">Expel</a>
                    </div>
                  </div>`;
  });
  printToDom('#card-container', domString);
};








// Handles click events
const handleButtonEvents = () => {
  startSorting.addEventListener('click', formOpen);
  document.querySelector('#form-container').addEventListener('submit', getStudentInfo);
};
// document.querySelector('#submit-form').addEventListener('submit', function (e) {
//   console.log(e);
// });
// Initialize JS
const init = () => {
  studentPrint(students);
  handleButtonEvents();
};
init();
