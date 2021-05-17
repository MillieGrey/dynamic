const noteInput = document.getElementById("noteInput")
const noteDisplay = document.getElementById("noteDisplay")




// Execute a function when the user releases a key on the keyboard
noteInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
//   document.getElementById("submitButton").click();
    console.log(noteInput.value)
    addNote()
    }
  });

  //add note
function addNote(e) {
    if(noteInput.value === '') {
        alert('Write something..');
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = "card bg-dark text-white text-center";
    //create text node and append to LI
    li.appendChild(document.createTextNode(noteInput.value));
    //create new link Element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //append the link to the li
    li.appendChild(link);
    //append li to ul
    noteDisplay.appendChild(li);

    //store in LS (local Storage)
    //storeNoteInLocalStorage(noteInput.value);

    //clear input
    noteInput.value = '';

    console.log(li);

}