console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  // EVENT HANDLERS
  $('.transferBtn').on('click', transferKoala);
  $('.deleteBtn').on('click', deleteKoala);
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object

    /*
      name: $('#nameIn').val()

    */
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new object
    console.log('this koala is getting sent to the addKoala func', koalaToSend);
    addKoala(koalaToSend);
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
    /*
    rename add_koala button 
    rename delete_koala button
    */
    for (let i = 0; i < response.length; i++) {
      $('#viewKoalas').append(`
        <tr>
          <td>${response[i].name}</td>
          <td>${response[i].age}</td>
          <td>${response[i].gender}</td>
          <td>${response[i].ready_to_transfer}</td>
          <td>${response[i].notes}</td>
          <td>
            <button class="transferBtn" data-id="${response[i].id}">Ready For Transfer</button>
          </td>
          <td>
            <button class="deleteBtn" data-id="${response[i].id}">Delete!</button>
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

function transferKoala() {
  const koalaId = $(this).data(`id`);
  $.ajax({
    type: 'PUT',
    url: `/koalas/put/${koalaId}`,
  })
    .then(function (response) {
      getKoalas();
    })
    .catch(function (error) {
      console.log('CLIENT - an error occurred ', error);
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
    url: `/koalas/delete/${koalaID}`,
    //data isn't used
  })
    .then(function (response) {
      console.log('CLIENT - a response', response);
    })
    .catch(function (error) {
      console.log('CLIENT - error in deleteBtn ajax', error);
    });
  console.log('random console.log');
  //want to delete koalaToSend object
}
