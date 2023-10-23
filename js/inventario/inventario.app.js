import { aggAinventario } from "./agregarA.inventario.js";
import { proceso_inicial } from "./proceso.inicial.js";
import { verInventario } from "./verInventario.js";

/* Proceso inicial de carga */
proceso_inicial();
aggAinventario();

/* verInventario() */

const btnAggInventario = document.getElementById('btnAggInventario');
const btnVerInventario = document.getElementById('btnVerInventario');

btnAggInventario.style.backgroundColor = '#35155D';

btnAggInventario.addEventListener('click', () => {
    document.getElementById('board').innerHTML = '';
    btnAggInventario.style.backgroundColor = '#35155D';
    btnVerInventario.style.backgroundColor = '#5d14b6';
    proceso_inicial();
    aggAinventario();
})

btnVerInventario.addEventListener('click', () => {
    document.getElementById('board').innerHTML = '';
    btnVerInventario.style.backgroundColor = '#35155D';
    btnAggInventario.style.backgroundColor = '#5d14b6';
    verInventario()
})
