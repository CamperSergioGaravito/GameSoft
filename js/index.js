import { accionBtnMenu } from "./boton_menu/boton.menu.js";
import { templateHeader } from "./templates/template.header.js";

/* cargar nav y header */
document.getElementById('header').insertAdjacentHTML('beforeend',templateHeader);

/* evento boton menú */
document.getElementById('btnMenu').addEventListener('click',accionBtnMenu)

