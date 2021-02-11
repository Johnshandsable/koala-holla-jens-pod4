console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
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
            <button class="delete_koala" data-id="${response[i].id}">Delete!</button>
          </td>
        </tr>
      `);
    }
  });
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
}
