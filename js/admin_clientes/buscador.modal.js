export const modalBuscador = //html
                        `
                        <div class="row col-8 position-fixed align-items-center justify-content-between  bg-black modalBusqueda" id="modalBusqueda">
                            <div class="constainer-fluid col-8 d-flex flex-wrap text-white">
                                <div class="row col-6 d-flex align-items-center">
                                    <label class="col-6" for="DNI">DNI</label>
                                    <input class="col-1 h-75" type="radio" name="busqueda" checked id="DNI">
                                </div>
                                <div class="row col-6 d-flex align-items-center">
                                    <label class="col-6" for="nombres">Nombres</label>
                                    <input class="col-1 h-75" type="radio" name="busqueda" id="nombres">
                                </div>
                                <div class="row col-6 d-flex align-items-center">
                                    <label class="col-6" for="apellidos">Apellidos</label>
                                    <input class="col-1 h-75" type="radio" name="busqueda" id="apellidos">
                                </div>
                                <div class="row col-6 d-flex align-items-center">
                                    <label class="col-6" for="telefono">Teléfono</label>
                                    <input class="col-1 h-75" type="radio" name="busqueda" id="telefono">
                                </div>
                                <div class="row col-6 d-flex align-items-center">
                                    <label class="col-6" for="email">Email</label>
                                    <input class="col-1 h-75" type="radio" name="busqueda" id="email">
                                </div>
                                <div class="row col-6 d-flex align-items-center">
                                    <label class="col-6" for="nacionalidad">Nacionalidad</label>
                                    <input class="col-1 h-75" type="radio" name="busqueda" id="nacionalidad">
                                </div>
                            </div>
                            <div class="constainer-fluid col-4 contBuscar">
                                <input class="col-11 fs-4 " type="text" placeholder="Buscar" id="buscador">
                            </div>
                        </div>
                        `