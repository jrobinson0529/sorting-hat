import {students, studentPrint, ranHouse} from "./index.js";

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

export default getStudentInfo;
