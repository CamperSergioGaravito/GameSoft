import { buscarItemStorage } from "../storage/storage.acciones.js";
import { addFilaTablaCliente } from "./template.filaTabla.js";

export function buscador(e) {
    e.preventDefault()
    console.log(e.key)

    let listaAbcMin = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z';
    const listaAbcMay = listaAbcMin.toUpperCase().split(',');
    const listNumeros = '1,2,3,4,5,6,7,8,9,0'.split(',');
    const listOtros = 'á,é,í,ó,ú,ü'.split(',');
    listaAbcMin = listaAbcMin.split(',');

    const listFinal = [].concat(listaAbcMin,listaAbcMay,listNumeros,listOtros);

    if(listFinal.includes(e.key) || e.key === ' ' || e.key === 'Backspace') {
        const buscador = document.getElementById('buscador');
        const radios = document.getElementById('modalBusqueda').querySelectorAll('input');

        if(e.key === 'Backspace') {
            buscador.value = buscador.value.slice(0,-1);
        }
        else {
            document.getElementById('buscador').value += e.key;
        }

        radios.forEach(radio => {
            if(radio.checked) {
                const clave = 'clientes';
                const resBusqueda = buscarItemStorage(clave,radio.id.toLowerCase(),buscador.value,true)
                
                if(resBusqueda.data) {
                    mostrarResBusqueda(resBusqueda.data);
                }
                else {
                    
                }
            }
            else {
                
            }
            
        })
    }
    else {

    }

}

export function mostrarResBusqueda(resultado) {
    const clienteTbody = document.getElementById('clienteTbody');
    clienteTbody.innerHTML = '';
    resultado.forEach(cliente => {
        const template = addFilaTablaCliente(cliente);
        clienteTbody.insertAdjacentHTML('beforeend',template);
    })
}