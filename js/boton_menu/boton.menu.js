import { navDesple } from "../templates/template.nav.js";

export function accionBtnMenu() {
    try {
        const navbar = document.getElementById('navDesple');
        navbar.remove();
    } catch (error) {
        document.getElementById('areaDeTrabajo').insertAdjacentHTML('beforeend',navDesple)
    }
}