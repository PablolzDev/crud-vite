
function fof() {
  for (const coder of coders) {
    tbody.innerHTML += `<tr>
  <th scope="row">${coder.id}</th>
  <td>${coder.name}</td>
  <td>${coder.lastName}</td>
  <td>${coder.email}</td>
 </tr>`;
  }
}

 export function fore(coders,tbody) {
  coders.forEach((coder) => {
    tbody.innerHTML += `<tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
  </tr>`
  })
}



function fori() {
  for (const key in coders) {
    tbody.innerHTML += `<tr>
    <th scope="row">${coders[key].id}</th>
    <td>${coders[key].name}</td>
    <td>${coders[key].lastName}</td>
    <td>${coders[key].email}</td>
  </tr>`;
  }
}

function fo() {
  for (let i = 0; i < coders.length; i++) {
    tbody.innerHTML += `<tr>
    <th scope="row">${coders[i].id}</th>
    <td>${coders[i].name}</td>
    <td>${coders[i].lastName}</td>
    <td>${coders[i].email}</td>
  </tr>`;
  }
}

