import {students, studentPrint} from "./index.js";

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

export default filterClick;
