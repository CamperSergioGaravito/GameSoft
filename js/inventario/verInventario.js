import { obtenerItem } from "../storage/storage.acciones.js";
import { tarjetaJuego } from "../templates/tarjeta,juego.js";

export function verInventario(){
    const inventario = obtenerItem('inventario');
    console.log(`verInventario.js :: verInventario :: inventario -> ${inventario} `,inventario)
    inventario.forEach(juego => {
        const template = tarjetaJuego(juego);
        document.getElementById('board').insertAdjacentHTML('beforeend',template);
    })
}