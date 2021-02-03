import printToDom from "./printToDom.js";

const formOpen = (e) => {
  e.preventDefault();
  let domString = '';
  if (e.target.id === "sortingBtn") {
     domString = `      
                        <div class="form-group w-100 d-flex flex-column flex-wrap align-items-start">
                            <label for="name" class="my-3">Student:</label>
                            <input type="text" class="form-control text-center" id="name" placeholder="Enter name here..." required>
                            <button type="submit" class="btn btn-primary my-3" id="submit-form">Submit</button>
                            <img class="img-fluid align-self-end"src="../img/106-1067907_sorting-hat-png-harry-potter-sorting-hat-png.png" alt="a hat"
                          </div> 
              
               `;            
  }
  printToDom('#form-container', domString);

  // Fancy sound effects
  new Audio('../sounds/sort.wav').play();
};

export default formOpen;
