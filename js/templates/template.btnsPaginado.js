export function temp_controlBtns(data) {
    const templateControlPaginado = //html
                    `
                    <div class="row col-4 d-flex align-items-center justify-content-evenly position-fixed controlPag" id="contBtnPreNex">
                        <button type="button" class="col-3 border-white  rounded-start-5 fs-5 text-white fw-bold" data-url="${data.previous}" id="btnAnterior">Anterior</button>
                        <div class="col-6 fs-4 text-bg-light text-center fw-bold"><span id="paginaActual">${data.numPag} / ${data.cantPag}</div>
                        <button type="button" class="col-3 border-white  rounded-end-5 fs-5 text-white fw-bold" data-url="${data.next}" id="btnSiguiente">Siguiente</button>
                    </div>  
                    `

    return templateControlPaginado;
}
    