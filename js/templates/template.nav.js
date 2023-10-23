let ruta
const location = window.location.pathname
const host = '/GameSoft/'

if(location === "/index.html" || location === "/GameSoft/index.html" || location === "/GameSoft/") {
    ruta = './'
}
else {
    ruta = '../'
}

export const navDesple = //html
                        `
                        <nav class="row m-0 col-lg-1 col-md-3 d-flex flex-column position-fixed end-0 align-items-center justify-content-evenly gap-1 nav" id="navDesple">
                            <a href="${host}/pages/Tienda_de_juegos.html" class="rounded-4 text-center d-flex align-items-baseline justify-content-center p-0 position-relative p-1 nav__btn">
                                <img src="${ruta}/assets/productos.gif" alt="" class="w-75">
                                <span class="fs-5 fw-bold position-absolute text-white w-100 nav__spanBtn">Productos</span>
                            </a>
                            <a href="${host}/pages/inventario.html" class="rounded-4 text-center d-flex align-items-baseline justify-content-center p-0 position-relative p-1 nav__btn">
                                <img src="${ruta}/assets/jugando.gif" alt="" class="w-75">
                                <span class="fs-5 fw-bold position-absolute text-white w-100 nav__spanBtn">Inventario</span>
                            </a>
                            <a href="${host}/pages/administrar_clientes.html" class="rounded-4 text-center d-flex align-items-baseline justify-content-center p-0 position-relative p-1 nav__btn">
                                <img src="${ruta}/assets/clientes.gif" alt="" class="w-75">
                                <span class="fs-5 fw-bold position-absolute text-white w-100 nav__spanBtn">Clientes</span>
                            </a>
                        </nav>
                        `