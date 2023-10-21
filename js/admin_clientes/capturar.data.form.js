import { Cliente } from "../clases/Clase.cliente.js";
import { guardarStorage, obtenerItem } from "../storage/storage.acciones.js";
import { addFilaTablaCliente } from "./template.filaTabla.js";

export function capturarDataForm(e) {
    e.preventDefault();
    console.log('o-O ',e.target)
    const formNC = document.getElementById('formNewcliewnt');
    console.log(formNC.nombres.value)
    const cliente = new Cliente(
                                formNC.dni.value,
                                formNC.nombres.value,
                                formNC.apellidos.value,
                                formNC.telefono.value,
                                formNC.email.value,    
                                formNC.nacimiento.value,
                                formNC.nacionalidad.value
                            )

    
    console.log(`capturar.data.form.js :: capturarDataForm :: cliente ->`, cliente)

    const clientesLocalSt = obtenerItem('clientes');

    if(clientesLocalSt) {
        procesarForm(clientesLocalSt,cliente);
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
    document.getElementById('modalAggCliente').remove()
}