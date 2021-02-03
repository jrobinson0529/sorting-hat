// Holds the deleted student cards
const voldArmy = [];

// Holds the students object data
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

// Injects HTML into a selected element
const printToDom = (divId, printedString) => {
  let selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printedString;
};

// Chooses a random adjective to apply to deleted student cards that join voldarmy
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

// Apply a random house to newly created student cards
const ranHouse = () => {
  const ranNum = (Math.floor(Math.random() * 4));
  let house = '';
  switch(ranNum) {
    case 0:
      house = 'Slytherin';
      break;
    case 1:
      house = 'Gryffindor';
      break;
    case 2:
      house = 'Hufflepuff';
      break;
    case 3:
      house = 'Ravenclaw';
      break;
  }
  return house;
};

// Callback to opens the student form
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
  // document.getElementById('#form-container').style.animation = "fadeIn 3s 1";
  printToDom('#form-container', domString);

  // Fancy sound effects
  new Audio('sort.wav').play();
};

// Callback to handle student submit button on form
const getStudentInfo = (e) => {

  // Prevent form from reloading page
  e.preventDefault();

  // Local query selectors that correspond to obj shorthand below
  const form = document.querySelector('form');
  const name = document.querySelector('#name').value;
  const house = ranHouse();

  const obj = {
    name,
    house,
  };

  // When function gets called this pushes the newly created obj into the students array
  students.push(obj);

  // Print the updated array after each submission
  studentPrint(students);

  // Resets form after submit button is clicked
  form.reset();

  // Scroll down to the student cards section
  document.querySelector('#hogbois').scrollIntoView({behavior: "smooth"});
};

// Prints voldArmy array to DOM
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

// Print students array to DOM
const studentPrint = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `
                  <div class="card m-3 text-center ${element.house}" style="width: 18rem;" id="${i}">
                    <div class="card-body">
                      <h5 class="card-title">${element.name}</h5>
                      <hr class="card-line">
                      <p class="card-text">${element.house}</p>
                      <audio id="playSoundExpel" src="record.wav"></audio>
                      <button onclick="playSoundExpel()" class="btn btn-primary expel" id="${i}">Expel</button>
                    </div>
                  </div>`;
  });
  printToDom('#card-container', domString);
};

// Delete student cards from students array and add them to voldArmy array
const deleteStudent = (e) => {
  const targetType = e.target.type;

  // The target ID will end up being the index of each card in the students array
  let targetId = e.target.id;

  // Checking if the area clicked is the type of 'button'
  if (targetType === 'submit') { 

    // Simultaneously splice the student card at the index of 'targetId' and add it to voldArmy array
    voldArmy.push(students.splice(targetId, 1));

    // Prints voldArmy cards after each delete is clicked
    voldArmyPrint(voldArmy);

    // Print the updated students array
    studentPrint(students);

    // Fancy audio on delete click
    new Audio('expel.wav').play();
  }
};

// Sort based on house, or alphabetically
const filterClick = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'house') {
      // Sort method is hard to explain. Each letter in the alphabet has a UTF-16 code and this is checking if the UTF16 of A, the first object.property being checked, is greater than UTF16 of B. If it returns 1 then it takes priority.
      const filteredByHouse = students.sort((a, b) => (a.house > b.house) ? 1 : (a.house === b.house) ? 1 : -1);
      
      // Print the array that has been sorted
      studentPrint(filteredByHouse);

      // Names need to be converted to lowercase because capital letters have different UTF16 values.
      } else if (buttonId === 'alphabet') {
      const filteredByAlphabet = students.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);

      // Print the array that has been sorted
      studentPrint(filteredByAlphabet);
  }  
};

// Handles click events
const handleButtonEvents = () => {
  document.querySelector('#sortingBtn').addEventListener('click', formOpen);
  document.querySelector('#form-container').addEventListener('submit', getStudentInfo);
  document.querySelector('#card-container').addEventListener('click', deleteStudent);
  document.querySelector('#house').addEventListener('click', filterClick);
  document.querySelector('#alphabet').addEventListener('click', filterClick);
};

// Initializes Javascript upon page load
const init = () => {
  studentPrint(students);
  handleButtonEvents();
};

init(); // Function call for above function

//                          \_______/
//                      `.,-'\_____/`-.,'                                      
//                       /`..'\ _ /`.,'\
//                      /  /`.,' `.,'\  \                                            
//                     /__/__/     \__\__\__                                          
//                     \  \  \     /  /  /                                                
//                      \  \,'`._,'`./  /                                      
//                       \,'`./___\,'`./            
//                      ,'`-./_____\,-'`.
//                          /   |   \
//                              |
//                              |
//                              |
//                           / _ \
//                         \_\(_)/_/
//                          _//"\\_  Steve the Spider
//                           /   \
