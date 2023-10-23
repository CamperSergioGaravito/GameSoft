let ruta
const location = window.location.pathname
const host = window.location.host.includes('github') ? '/GameSoft/' : '/';

if(location === "/index.html" || location === "/GameSoft/index.html" || location === "/GameSoft/") {
    ruta = './'
}
else {
    ruta = '../'
}

export const templateHeader = //html
                            `
                            <a href="${host}index.html" class="row text-decoration-none  col-4 d-flex align-items-center justify-content-start ">
                                <img src="${ruta}assets/logo.png" alt="logo" class="header__img">
                                <h1 class="fs-1 col-4 m-0 fw-bold text-white">GameSoft</h1>
                            </a>
                            <div class="row col-1 ">
                                <button class="m-0 bg-transparent rounded-4  header__btnMenu" id="btnMenu">
                                    <img src="${ruta}assets/menuWhite.svg" alt="" class="w-100 object-fit-contain">
                                </button>
                            </div>
                            `