export const modalAggCli = //html
                        `
                        <div class="row position-fixed col-12 h-100 top-0 bg-body bg-opacity-50 z-1 align-items-center justify-content-center" id="modalAggCliente">
                            <form class="col-lg-6 col-md-8 col-sm-10 rounded d-flex flex-column align-items-center justify-content-evenly text-white" id="formNewcliewnt">
                                <h2 class="text-center fs-1 fw-bold">Nuevo cliente</h2>
                                <div class="container col-lg-10 col-md-10 col-sm-11 d-flex flex-wrap align-items-center justify-content-center fs-4 fw-bold">
                                    <div class="col-lg-6 col-md-11 col-sm-11 ">
                                        <label for="nombres" class="col-12 ">Nombres</label>
                                        <input required type="text" placeholder="" class="col-11" name="nombres" id="nombres">
                                    </div>
                                    <div class="col-lg-6 col-md-11 col-sm-11 ">
                                        <label for="apellidos" class="col-12">Apellidos</label>
                                        <input required type="text" placeholder="" name="apellidos" class="col-11" id="apellidos">
                                    </div>
                                </div>
                                <div class="container col-lg-10 col-md-11 col-sm-12  d-flex flex-wrap align-items-center justify-content-center fs-4 fw-bold">
                                    <div class="col-lg-6 col-md-11 col-sm-10 ">
                                        <label for="telefono" class="col-12 ">Teléfono</label>
                                        <input required type="tel" placeholder="" name="telefono" class="col-11" id="telefono">
                                    </div>
                                    <div class="col-lg-6 col-md-11 col-sm-10 ">
                                        <label for="email" class="col-12">Email</label>
                                        <input required type="text" placeholder="" name="email" class="col-11" id="email">
                                    </div>
                                </div>
                                <div class="container col-lg-10 col-md-8 d-flex flex-wrap align-items-center justify-content-center fs-4 fw-bold">
                                    <div class="col-lg-6 col-md-11 col-sm-10 ">
                                        <label for="dni" class="col-12"># Documento</label>
                                        <input required type="number" placeholder="" name="dni" class="col-11" id="dni">
                                    </div>
                                    <div class="col-lg-6 col-md-11 col-sm-10 ">
                                        <label for="nacimiento" class="col-12">Fecha nacimiento</label>
                                        <input required type="date" class="" name="nacimiento" id="nacimiento">
                                    </div>
                                </div>
                                <div class="container col-lg-10 col-md-11  d-flex flex-wrap align-items-center justify-content-center fs-4 fw-bold">
                                    <div class="col-12 mb-3  ">
                                        <label for="nacionalidad" class="col-12">Nacionalidad</label>
                                        <input required type="text" placeholder="" name="nacionalidad" class="col-11" id="nacionalidad">
                                    </div>
                                    <div class="container p-0 col-lg-8 col-md-11 col-sm-11 d-flex align-items-center justify-content-evenly fs-4 fw-bold btnsForm">
                                        <button type="button" class="btn btn-danger col-lg-5 col-md-5 col-sm-6 fs-3 p-0 m-0 fw-bold" id="cancelarRegistroCli">Cancelar</button>
                                        <button class="btn btn-primary border-1 border col-lg-5 col-md-5 col-sm-6 fs-3 p-0 m-0 fw-bold" id="registrar">Registrar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        `