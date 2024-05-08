// Import our custom CSS
import "../scss/style.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "./database.js";
import { fore } from "./operations.js";

const tbody = document.querySelector("tbody")

fore(coders, tbody)