import { modalAggCli } from "../templates/template.modal.aggCliente.js";
import { capturarDataForm } from "./capturar.data.form.js";
import { eliminarCliente } from "./validar.eliminar.js";

export function accionBtnMenuCli(e) {
    console.log(e.target.id);
    const idBtn = e.target.id;

    if(idBtn === 'agregar') {
        document.getElementById('areaDeTrabajo').insertAdjacentHTML('beforeend',modalAggCli)
        document.querySelector('form').addEventListener('submit', capturarDataForm)
        document.getElementById('cancelarRegistroCli').addEventListener('click', () => document.getElementById('modalAggCliente').remove());
    }
    else if(idBtn === 'eliminar'){
        eliminarCliente();
    }

    else {

    }
}