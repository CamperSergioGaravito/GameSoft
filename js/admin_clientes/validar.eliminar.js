import { buscarItemStorage, guardarStorage } from "../storage/storage.acciones.js";

export function eliminarCliente() {
    const checkbox = document.getElementById('clienteTbody').querySelectorAll('input[type=checkbox]');

    checkbox.forEach(check => {
        if(check.checked) {
            console.log(check.parentElement.parentElement.querySelector('td').textContent);
            const resp = buscarItemStorage('clientes','dni',check.parentElement.parentElement.querySelector('td').textContent);
            console.log(`validar.eliminar.js :: eliminarCliente :: resp -> `,resp)
            if(resp.estado === true) {
                const data = resp.dataStorage;
                data.splice(data.indexOf(resp),1);
                guardarStorage('clientes',data);
                check.parentElement.parentElement.remove();
            }
        }
        else {

        }
    })
}