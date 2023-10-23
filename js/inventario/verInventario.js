import { obtenerItem } from "../storage/storage.acciones.js";
import { tarjetaJuego } from "../templates/tarjeta,juego.js";
import { eliminarJuego } from "./eliminar.juego.inventario.js";

export function verInventario(){
    const inventario = obtenerItem('inventario');
    console.log(`verInventario.js :: verInventario :: inventario -> ${inventario} `,inventario)
    inventario.forEach(juego => {
        const template = tarjetaJuego(juego);
        document.getElementById('board').insertAdjacentHTML('beforeend',template);
        const btnTarjeta = document.getElementById('agregarJuego');
        btnTarjeta.setAttribute('id','eliminarJuego');
        btnTarjeta.textContent = 'Eliminar';
        btnTarjeta.classList.remove('btn-success');
        btnTarjeta.classList.add('btn-danger');
        btnTarjeta.addEventListener('click',eliminarJuego);
    })
}