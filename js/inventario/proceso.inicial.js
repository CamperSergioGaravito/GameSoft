import { temp_controlBtns } from "../templates/template.btnsPaginado.js";
import { getJuegos } from "./peticion.juegos.js";
import { Juego } from "../clases/clase.juego.js";
import { porcentajePuntosFide } from "../config/sistem.config.js";
import { tarjetaJuego } from "../templates/tarjeta,juego.js";

export function proceso_inicial() {
    let numPag = 1

    async function peticion(url) {
        const data = await getJuegos(url);

        /* console.log(data); */

        document.getElementById('board').innerHTML = '';

        const juegos = data.results;
        juegos.forEach(juego => {
            const precio = 1000000 * (juego.rating / 8);
            const puntos = precio * porcentajePuntosFide;
            if (precio !== 0) {
                const generos = juego['genres'].map(e=>e.name).toString();
                const plataformas = juego['platforms'].map(e=>e.platform.name).toString();
                //console.log(`proceso.inicial.js :: peticion :: plataformas -> `,plataformas)

                let juegoMod = new Juego(
                    juego.id,
                    juego.name,
                    juego.background_image,
                    generos,
                    precio.toLocaleString('es'),
                    puntos,
                    plataformas
                )

                let template = tarjetaJuego(juegoMod);
                document.getElementById('board').insertAdjacentHTML('beforeend', template);
            }
        })

        

        const paginado = {
            numPag: numPag,
            paginas: data.count,
            nextPag: data.next,
            prevPag: data.previous,
            pagAtual: url
        }

        const templateControlPaginado = temp_controlBtns({ previous: data.previous, next: data.next, cantPag: data.count, numPag });
        document.getElementById('contPanelContr').innerHTML = '';
        document.getElementById('contPanelContr').insertAdjacentHTML('beforeend', templateControlPaginado);

        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');

        if (numPag === 1) {
            btnAnterior.disabled = true;
            btnAnterior.classList.add('bg-secondary');
        }
        else if (numPag === 4) {
            btnSiguiente.disabled = true;
            btnSiguiente.classList.add('bg-secondary');
        }
        else {
            btnAnterior.disabled = false;
            btnAnterior.classList.remove('bg-secondary');
            btnSiguiente.disabled = false;
            btnSiguiente.classList.remove('bg-secondary');
        }
    }

    peticion('../../db/prueba.json');


    document.getElementById('contPanelContr').addEventListener('click', (e) => {
        
        if (e.target.id === 'btnSiguiente' && e.target.dataset.url !== null) {
            numPag++;
            peticion(e.target.dataset.url);
        }

        else if (e.target.id === 'btnAnterior' && e.target.dataset.url !== null) {
            numPag--;
            
            if (numPag < 2) {
                numPag = 1;
                peticion(e.target.dataset.url);
            }
            else {
                peticion(e.target.dataset.url);
            }
        }

        else {
            return
        }
    })
}