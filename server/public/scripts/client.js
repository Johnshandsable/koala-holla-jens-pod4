console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
<<<<<<< HEAD
=======
  $('#deleteBtn').on('click', deleteKoala());
>>>>>>> acb7bb6f20e3e996d57ed264e2199b5ab2a09877
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
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
<<<<<<< HEAD
  $('#viewKoalas').empty();

  // ajax call to server to get koalas
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
=======
  // ajax call to server to get koalas
>>>>>>> acb7bb6f20e3e996d57ed264e2199b5ab2a09877
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
<<<<<<< HEAD
=======
}


// adds a koala to the database
function addKoala(koalaToAdd) {
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koala,
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
    url: '/id',
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
>>>>>>> acb7bb6f20e3e996d57ed264e2199b5ab2a09877
}
