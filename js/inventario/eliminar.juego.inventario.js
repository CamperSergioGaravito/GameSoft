export function eliminarJuego(e) {
    console.log(e.target.offsetParent.querySelector('#idJuego').textcontent);
    e.target.offsetParent.remove();
}