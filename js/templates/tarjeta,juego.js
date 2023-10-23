export function tarjetaJuego(data) {

    const template = //html
                    `
                    <div class="card p-0 overflow-hidden tarjeta">
                        <div class="card-heade bg-warning">
                            <div class="card-text fs-4 ms-2 fw-bold tituloCard" title="${data.nombre}" id="nombreJuego">${data.nombre}</div>
                        </div>
                        <div class="card-body p-0">
                            <div class="container-fluid overflow-hidden d-flex align-items-center justify-content-center p-0 contImg">
                                <img src="${data.imagen}" alt="imagen juego" class="card-img h-100">
                            </div>
                            <div class="container-fluid d-flex flex-column justify-content-evenly bg-warning pt-1 gap-1 infoCard">
                                <div class="container-fluid d-flex pt-1 col-12 ">
                                    <h4 class="text-center col-6 pt-1 fw-bold d-flex align-items-center">Id: <span class="ms-3" id="idJuego">${data.id}</span></h4>
                                    <h4 class="text-center col-6 pt-1 fw-bold d-flex align-items-center">Puntos: <span class="ms-3" id="puntosJuego">${data.puntosF}</span></h4>
                                </div>
                                <h4 class="text-center col-12 fw-bold pt-1 textFloat">Géneros: <span class="ms-1" id="generosJuego">${data.generos}</span></h4>
                                <h4 class="text-center col-12 fw-bold pt-1 textFloat" title="${data.plataforma}">Plataformas: <span class="ms-1 textFloat" id="plataformasJuego">${data.plataforma}</span></h4>
                            </div>
                        </div>
                        <div class="card-footer d-flex align-items-center gap-1 justify-content-center">
                            <h3 class="col-6 m-0 fw-bold fs-4 bg-warning h-100 rounded-3 d-flex align-items-center justify-content-center ">
                                $<span id="precioJuego">${data.valor_licencia}</span>
                            </h3>
                            <button type="button" class="col-6 fs-4 btn btn-success fw-bold" id="agregarJuego">
                                Agregar
                            </button>
                        </div>
                    </div>
                    `
    return template;
}