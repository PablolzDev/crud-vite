// Import our custom CSS
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "../../public/database/database.js";
import { create, deleteItem, index } from "./operations.js";
import { alertSmallSuccess } from "../js/alerts.js";




const tbody = document.querySelector("tbody")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")
const table = document.querySelector("table")
let idToUpdate

 form.addEventListener("submit",function (event){
   if (idToUpdate===undefined) {

      create(name,lastName,email,coders)
      alertSmallSuccess("saved")

   }
   else{
   
      for(const coder of coders){
         if(coder.id == idToUpdate){
            coder.name = name.value
            coder.lastName = lastName.value
            coder.email = email.value
            alertSmallSuccess("Coder updated")
         }

         alertSmallSuccess("updated")
      }

   }
    form.reset()
    index(coders,tbody)
    event.preventDefault()
 })

table.addEventListener("click", function (event) {
   if(event.target.classList.contains("btn-danger")){
      alertSmallSuccess("Le diste clicj al boton")
      const idv = event.target.getAttribute("data-id")
      console.log(idv)
      deleteItem(coders,idv)
      alertSmallSuccess("Coder deleted")
      index(coders,tbody)
   }

   if(event.target.classList.contains("btn-warning")){
      idToUpdate = event.target.getAttribute("data-id")
      const userFound = coders.find(coder => coder.id == idToUpdate)

      name.value = userFound.name
      lastName.value = userFound.lastName
      email.value = userFound.email

   }

})



index(coders, tbody) 

