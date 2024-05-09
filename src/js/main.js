// Import our custom CSS
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "../../public/database/database.js";
import { create, index } from "./operations.js";
import { alertSmallSuccess } from "./alerts.js";




const tbody = document.querySelector("tbody")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")

 form.addEventListener("submit",function (event){

    create(name,lastName,email,coders)
    alertSmallSuccess("saved")
    form.reset()
    index(coders,tbody)
    event.preventDefault()
 })



index(coders, tbody) 

