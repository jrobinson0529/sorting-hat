import {formOpen, getStudentInfo, deleteStudent, filterClick} from "./index.js";

const handleButtonEvents = () => {
  document.querySelector('#sortingBtn').addEventListener('click', formOpen);
  document.querySelector('#form-container').addEventListener('submit', getStudentInfo);
  document.querySelector('#card-container').addEventListener('click', deleteStudent);
  document.querySelector('#house').addEventListener('click', filterClick);
  document.querySelector('#alphabet').addEventListener('click', filterClick);
};

export default handleButtonEvents;
