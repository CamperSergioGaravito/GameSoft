import { guardarStorage, obtenerItem } from "../storage/storage.acciones.js";

export function eliminarJuego(e) {
    console.log(e.target.offsetParent.querySelector('#idJuego').textContent);
    const inventario = obtenerItem('inventario');
    console.log(`eliminar.juego.inventario.js :: eliminarJuego :: inventario -> ${inventario} `,inventario)

    for(let x=0;x<inventario.length;x++) {
        if(inventario[x].id === e.target.offsetParent.querySelector('#idJuego').textContent) {
            inventario.splice(x,1);
            guardarStorage('inventario',inventario);
            e.target.offsetParent.remove();
            return
        }
        else  {

        }
    }
}