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
  // EVENT HANDLERS
  $(document).on('click', '.delete_koala', deleteKoala);
  // EVENT HANDLERS

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

  $('#viewKoalas').empty();

  $.ajax({
    type: 'GET',
    url: '/koalas',
  }).then(function (response) {
    console.log('check response', response);
    //append to DOM
    for (let i = 0; i < response.length; i++) {
      $('#viewKoalas').append(`
        <tr>
          <td>${response[i].name}</td>
          <td>${response[i].age}</td>
          <td>${response[i].gender}</td>
          <td>${response[i].readyForTransfer}</td>
          <td>${response[i].notes}</td>
          <td>
          <button class="add_koala" data-id="${response[i].id}">Add Koala!</button>
        </td>
          <td>
            <button class="delete_koala" data-id="${response[i].id}">Delete!</button>
          </td>
        </tr>
      `);
    }
  });

  // ajax call to server to get koalas
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
}

// adds a koala to the database
function addKoala(koalaToAdds) {
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koalaToAdds,
  })
    .then(function (response) {
      console.log('Response from server.', response);
      // refreshKoalaTable(); will have a function here.
    })
    .catch(function (error) {
      console.log('Error in POST', error);
      alert(
        'Unable to add koalas information at this time. Please try again later.'
      );
    });
}

//-Michael delete function
function deleteKoala() {
  console.log('in delete_Koala');
  const koalaID = $(this).data('id'); //error, is undefined
  console.log(koalaID, 'koalaId');

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
  console.log('random console.log');
  //want to delete koalaToSend object
}
