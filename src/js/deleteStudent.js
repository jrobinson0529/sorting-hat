import {voldArmy, voldArmyPrint, studentPrint, students} from "./index.js";

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
    new Audio('../sounds/expel.wav').play();
  }
};

export default deleteStudent;
