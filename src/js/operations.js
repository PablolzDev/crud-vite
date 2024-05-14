export function index(coders, tbody) {
  tbody.innerHTML = "";

  coders.forEach((coder) => {
    tbody.innerHTML += `<tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
    <td>
    <button type="button" data-id=${coder.id} class =" btn btn-primary">Details</button>
    <button type="button" data-id=${coder.id} class="btn btn-danger">Delete</button>
    <button type="button" data-id=${coder.id}  class =" btn btn-warning">Edit</button> 
    
    
    

    </td>

  </tr>`;
  });
}

// onclick="deleteCoder(${coder.id}

export function create(name, lastName, email, coders) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  }; //Ingresar datos en el forms ingresados desde chrome con el forms
  coders.push(newCoder);
}
export function deleteItem(coders,idv) {
  coders.forEach((coder,index) => {
    if(coder.id == idv){
       coders.splice(index,1)
    }
 });
}
