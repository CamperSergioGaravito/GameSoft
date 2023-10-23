import { obtenerItem } from "../storage/storage.acciones.js";
import { modalAggCli } from "../templates/template.modal.aggCliente.js";
import { buscador, mostrarResBusqueda } from "./buscador.js";
import { modalBuscador } from "./buscador.modal.js";
import { capturarDataForm } from "./capturar.data.form.js";
import { eliminarCliente } from "./validar.eliminar.js";

export function accionBtnMenuCli(e) {
    const idBtn = e.target.id;

    if(idBtn === 'agregar') {
        document.getElementById('areaDeTrabajo').insertAdjacentHTML('beforeend',modalAggCli)
        document.querySelector('form').addEventListener('submit', capturarDataForm)
        document.getElementById('cancelarRegistroCli').addEventListener('click', () => document.getElementById('modalAggCliente').remove());
    }
    else if(idBtn === 'eliminar'){
        eliminarCliente();
    }

    else if(idBtn === 'buscar') {
        if(!document.getElementById('modalBusqueda')) {
            document.getElementById('areaDeTrabajo').insertAdjacentHTML('beforeend',modalBuscador);
            document.getElementById('buscador').addEventListener('keypress',buscador);
            document.getElementById('buscador').addEventListener('keydown',buscador);
            document.getElementById('modalBusqueda').querySelectorAll('input').forEach(radio => {
                if(!radio.checked && radio.type !== 'text') {
                    radio.addEventListener('click', () => {
                        document.getElementById('buscador').value = '';
                        const resultado = obtenerItem('clientes');
                        mostrarResBusqueda(resultado);
                    });
                }
                else {

                }
            })
        }
        else {
            document.getElementById('modalBusqueda').remove();
            const resultado = obtenerItem('clientes');
            mostrarResBusqueda(resultado);
        }        
    }

    else {
        
    }
}