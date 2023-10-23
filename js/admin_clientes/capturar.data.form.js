import { Cliente } from "../clases/Clase.cliente.js";
import { buscarItemStorage, guardarStorage, obtenerItem } from "../storage/storage.acciones.js";
import { addFilaTablaCliente } from "./template.filaTabla.js";

export function capturarDataForm(e) {
    e.preventDefault();
    const formNC = document.getElementById('formNewcliewnt');
    
    const cliente = new Cliente(
                                formNC.dni.value,
                                formNC.nombres.value,
                                formNC.apellidos.value,
                                formNC.telefono.value,
                                formNC.email.value,    
                                formNC.nacimiento.value,
                                formNC.nacionalidad.value
                            );

    const clientesLocalSt = obtenerItem('clientes');

    if(clientesLocalSt) {
        const resBusq = buscarItemStorage('clientes','dni',cliente.dni);
        console.log(resBusq,'resBusq',cliente.dni)
        if(!resBusq.estado) {
            procesarForm(clientesLocalSt,cliente);
        }
        else {
            alert(`Cliente registrado`);
            document.getElementById('modalAggCliente').remove();
        }
    }
    else {
        guardarStorage('clientes',[]);
        procesarForm(obtenerItem('clientes'),cliente);
    }
    
}

function procesarForm(data,cliente) {
    //agrega el nuevo cliente y lo guarda en localStorage
    data.push(cliente);
    guardarStorage('clientes',data);

    const template = addFilaTablaCliente(cliente);
    
    document.getElementById('clienteTbody').insertAdjacentHTML('beforeend',template);
    document.getElementById('modalAggCliente').remove();
}