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
  const div = document.createElement('div');
  div.innerHTML = `
    <div>
      <label>Name</label>
    </div>
    <div>
      <input type="text" placeholder="Name"/>
    </div>
    <div>
      <label>Phone #</label>
    </div>
    <div>
      <input type="tel" placeholder="(###) ### - ####"/>
    </div>
    <div>
    <label>Ofiice</label>
    </div>
    <div>
      <input type="text" placeholder="####"/>
    </div>
    <button class="menu-button">Add</button>
  `
  document.getElementById('card').appendChild(div);
}
