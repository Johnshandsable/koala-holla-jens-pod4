console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
  deleteKoala();
}); // end doc ready

function setupClickListeners() {
  //$('#deleteBtn').on('click', deleteKoala());
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new object
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');

  // ajax call to server to get koalas
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
}

//-Michael delete function
function deleteKoala(params) {
  console.log('in deleteKoala');

  $.ajax({
    // /// what to delete
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th>Gender</th>
    //         <th>Ready for Transfer</th>
    //         <th>Notes</th>
    method: 'DELETE',
    url: '`/koalas/${koalaID}',
    //data isn't used
  })
    .then(function () {
      $(this).parent(tr).remove();
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log('error in deleteBtn ajax', error);
      return;
    });
  //want to delete koalaToSend object
}
