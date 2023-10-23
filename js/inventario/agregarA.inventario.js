import { Juego } from "../clases/clase.juego.js";
import { guardarStorage, obtenerItem } from "../storage/storage.acciones.js";

export function aggAinventario() {
    let inventarioStorage;
    if(obtenerItem('inventario') === false) {
        localStorage.setItem('inventario',JSON.stringify([]));
        inventarioStorage = obtenerItem('inventario');
    }
    else {
        inventarioStorage = obtenerItem('inventario');
    }

    const cards = document.getElementById('board');

    cards.addEventListener('click', (e) => {
        console.log(e.target.offsetParent.querySelector('#idJuego'));
        const inventario = obtenerItem('inventario');
        console.log(`agregarA.inventario.js :: cards.addEventListener :: inventario -> ${inventario} `,inventario)

        /* if(inventario) */

        if(e.target.offsetParent.querySelector('#idJuego').textContent) {
            if(e.target.localName === 'button') {
                console.log((e.target.offsetParent.querySelector('#nombreJuego')));
                const juego = new Juego(
                    e.target.offsetParent.querySelector('#idJuego').textContent,
                    e.target.offsetParent.querySelector('#nombreJuego').textContent,
                    e.target.offsetParent.querySelector('img').src,
                    e.target.offsetParent.querySelector('#generosJuego').textContent,
                    e.target.offsetParent.querySelector('#precioJuego').textContent,
                    e.target.offsetParent.querySelector('#puntosJuego').textContent,
                    e.target.offsetParent.querySelector('#plataformasJuego').textContent
                )
    
                inventarioStorage.push(juego);
                guardarStorage('inventario',inventarioStorage);
            }
        }
        else {
            
        }
    })

    console.log(JSON.parse(localStorage.getItem('inventario')));
}