
 export function index(coders,tbody) {

  tbody.innerHTML = ""

  coders.forEach((coder) => {
    tbody.innerHTML += `<tr>
    <th scope="row">${coder.id}</th>
    <td>${coder.name}</td>
    <td>${coder.lastName}</td>
    <td>${coder.email}</td>
  </tr>`
  })
}

export function create(name,lastName,email,coders) {
  
  const newCoder = {
        
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value
    
  } //Ingresar datos en el forms ingresados desde chrome con el forms  
  coders.push(newCoder)
}
