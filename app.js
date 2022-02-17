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
  document.getElementById('card').appendChild(form);
  document.getElementById('updateEmployee').addEventListener('click', updateEmployee);
}

function addEmployee () {
  console.log('Add Employee')
}
function updateEmployee () {
  console.log('Update Employee')
}
