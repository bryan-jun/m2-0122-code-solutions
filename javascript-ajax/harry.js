var userList = document.querySelector('#user-list');

function getUserList() {
  var xml = new XMLHttpRequest();
  xml.open('GET', 'http://hp-api.herokuapp.com/api/characters');
  xml.responseType = 'json';

  xml.addEventListener('load', function () {
    console.log(xml.status);
    console.log(xml.response);

    for (let x = 0; x <= xml.response.length - 1; x++) {
      var newLi = document.createElement('li');
      newLi.textContent = xml.response[x].name;
      userList.append(newLi);

    }

  });
  xml.send();
}

getUserList();
