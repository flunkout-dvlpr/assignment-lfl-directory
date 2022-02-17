// Your work here

function employeesView () {
  document.getElementById('card').innerHTML = '';
  let employeesTable = document.createElement('table');
  employeesTable.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Office</th>
      <th>Phone #</th>
    </tr>
  `;
  for (let idx=0; idx<employeeList.length; idx++) {
    employeesTable.innerHTML += `
      <tr>
        <td>${employeeList[idx].name}</td>
        <td>${employeeList[idx].officeNum}</td>
        <td>${employeeList[idx].phoneNum}</td>
      </tr>
    `;
  }
  document.getElementById('card').appendChild(employeesTable);
}

function addEmployeeView () {
  document.getElementById('card').innerHTML = '';
  const form = document.createElement('form');
  form.innerHTML = `
    <div>
      <label>Name</label>
    </div>
    <div>
      <input id="newEmployeeName" type="text" placeholder="Name"/>
    </div>
    <div>
      <label>Phone #</label>
    </div>
    <div>
      <input id="newEmployeePhone" type="tel" placeholder="(###) ### - ####"/>
    </div>
    <div>
    <label>Ofiice</label>
    </div>
    <div>
      <input id="newEmployeeOffice" type="text" placeholder="####"/>
    </div>
    <button id="addEmployee" class="menu-button">Add</button>
  `
  form.className = "form-container"
  document.getElementById('card').appendChild(form);
  document.getElementById('addEmployee').addEventListener('click', addEmployee);
}

function updateEmployeeView () {
  document.getElementById('card').innerHTML = '';
  const form = document.createElement('form');
  form.innerHTML = `
    <div>
      <label>Name</label>
    </div>
    <div>
      <input id="employeeName" type="text" placeholder="Name"/>
    </div>
    <div>
      <label>Phone #</label>
    </div>
    <div>
      <input id="employeePhone" type="tel" placeholder="(###) ### - ####"/>
    </div>
    <div>
    <label>Ofiice</label>
    </div>
    <div>
      <input id="employeeOffice" type="text" placeholder="####"/>
    </div>
    <button id="updateEmployee" class="menu-button">Update</button>
  `
  form.className = "form-container"
  document.getElementById('card').appendChild(form);
  document.getElementById('updateEmployee').addEventListener('click', updateEmployee);
}

function verifyEmployeeView () {
  document.getElementById('card').innerHTML = '';
  const form = document.createElement('form');
  form.innerHTML = `
    <div>
      <label>Name</label>
    </div>
    <div>
      <input id="search" type="text" placeholder="Name"/>
    </div>
    <button id="verifyEmployee" class="menu-button">Verify</button>
  `
  form.className = "form-container"
  document.getElementById('card').appendChild(form);
  document.getElementById('verifyEmployee').addEventListener('click', verifyEmployee);
}

function removeEmployeeView () {
  document.getElementById('card').innerHTML = '';
  const form = document.createElement('form');
  form.innerHTML = `
    <div>
      <label>Name</label>
    </div>
    <div>
      <input id="removeSearch" type="text" placeholder="Name"/>
    </div>
    <button id="removeEmployee" class="menu-button">Remove</button>
  `
  form.className = "form-container"
  document.getElementById('card').appendChild(form);
  document.getElementById('removeEmployee').addEventListener('click', removeEmployee);
}

function addEmployee () {
  const name = document.getElementById('newEmployeeName').value.replace(/ /g,'')
  const phone = document.getElementById('newEmployeePhone').value.replace(/ /g,'')
  const office = document.getElementById('newEmployeeOffice').value.replace(/ /g,'')
  if (name && office && phone) {
    if (phone.length === 10 && !isNaN(phone)) {
      const phoneFormatted = `${phone.substring(0,3)}-${phone.substring(3,6)}-${phone.substring(6,10)}`
      newEmployee = { name: name, officeNum: office, phoneNum: phoneFormatted }
      employeeList.unshift(newEmployee)
      employeesView()
      event.preventDefault()
      return false
    } else {
      alert('☎️ Enter a valid phone number! ☎️')
      event.preventDefault()
      return false
    }
  } else {
    alert('😯😯😯 All fields required! 😯😯😯')
    event.preventDefault()
    return false
  }
}

function updateEmployee () {
  console.log('Update Employee')
}
function verifyEmployee () {
  console.log('Verify Employee')
}
function removeEmployee () {
  console.log('Remove Employee')
}
