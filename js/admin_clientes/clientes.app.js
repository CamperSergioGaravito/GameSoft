import { obtenerItem } from "../storage/storage.acciones.js";
import { btnsAggModElim } from "../templates/template.btnsAggModElim.js";
import { accionBtnMenuCli } from "./accionBtnMenuCli.js";
import { addFilaTablaCliente } from "./template.filaTabla.js";
import { eliminarCliente } from "./validar.eliminar.js";

/* cargar menu de opciones/acciones */
document.getElementById('areaDeTrabajo').insertAdjacentHTML('beforeend',btnsAggModElim);

const contBtnsAcciones = document.getElementById('contBtnsAcciones').querySelectorAll('button');

contBtnsAcciones.forEach(btn => {
    btn.addEventListener('click', accionBtnMenuCli)
})

/* cargar datos de local storage, si los hay */

const dataTablaCli = obtenerItem('clientes');

if(dataTablaCli) {
    dataTablaCli.forEach(cliente => {
        const template = addFilaTablaCliente(cliente);
    
        document.getElementById('clienteTbody').insertAdjacentHTML('beforeend',template);
        eliminarCliente();
    })
}
else {
    
}